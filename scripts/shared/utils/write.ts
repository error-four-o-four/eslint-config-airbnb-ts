import type { Entries, UnknownRecord } from 'type-fest';

import {
	existsSync,
	mkdirSync,
	writeFileSync,
} from 'node:fs';

import {
	dirname,
	extname,
	isAbsolute,
	relative,
	sep,
} from 'node:path';

import { fileURLToPath } from 'node:url';

import { Linter } from 'eslint';

// @ts-ignore tmp
import promisedConfig from '../../../eslint.config.js';
import { pluginPaths } from '../../../src/globalSetup.ts';

import { toCamelCase, toKebabCase } from './main.ts';
import { assertIsString, assertIsRecord } from './assert.ts';

import type { PluginPrefix } from '../types/main.ts';

const linter = new Linter({ configType: 'flat' });
const linterConfig = await promisedConfig;

export const NOTICE = '/** @file GENERATED WITH SCRIPT */';

const baseURL = new URL('../../..', import.meta.url);

// has trailing slash (!)
// const base = fileURLToPath(baseURL);

// resolve relative to root if meta is undefined
function resolvePath(filePath: string, url?: string) {
	return fileURLToPath(new URL(filePath, url || baseURL));
}

const ensuredFolders = new Set<string>();

function ensureFolder(fileOrFolder: string, meta?: string) {
	const path = isAbsolute(fileOrFolder)
		? fileOrFolder
		: resolvePath(fileOrFolder, meta);

	const folder = !extname(fileOrFolder) ? path : dirname(path);

	if (ensuredFolders.has(folder)) return;

	ensuredFolders.add(folder);

	if (!existsSync(folder)) {
		mkdirSync(folder, { recursive: true });
	}
}

type RequiredJsonString = `./${string}.json`;
type RequiredFileString = `./${string}.${'js' | 'ts'}`;

type GenericString<
	T extends string,
	U extends string
> = T extends U ? T : never;

type BannedExtensionString = `${string}.${string}`;
type RequiredFolderString<
	T extends string> = `./${T extends BannedExtensionString ? never : T}`;

export const write = {
	json<T extends string>(
		file: GenericString<T, RequiredJsonString>,
		input: unknown,
	) {
		const path = resolvePath(file);
		ensureFolder(path);

		console.log(`Writing data to '${file}'`);
		const data = JSON.stringify(input, null, 2);
		writeFileSync(
			file,
			data,
			{ flag: 'w+' },
		);
	},
	file<T extends string>(
		file: GenericString<T, RequiredFileString>,
		data: string,
	) {
		const path = resolvePath(file);
		ensureFolder(path);

		console.log(`Writing data to '${file}'`);
		writeFileSync(
			path,
			data,
			{ flag: 'w+' },
		);

		const result = linter.verifyAndFix(data, linterConfig, file);

		// console.log('fixed:', result.fixed);

		if (result.messages.length > 0) {
			console.log(
				result.messages.length,
				`issue${result.messages.length > 1 ? 's' : ''} remaining:`,
			);

			result.messages.forEach(
				(linted) => console.log(`* ${linted.message}`),
			);
		}

		if (result.fixed && result.output) {
			writeFileSync(file, result.output, { flag: 'w+' });
		}
	},
	async configFiles<
		T extends string,
		U extends UnknownRecord | Entries<UnknownRecord>
	>(
		folder: RequiredFolderString<T>,
		input: U,
	) {
		const entries: Entries<UnknownRecord> = (
			Array.isArray(input)
				? input
				: Object.entries(input)
		);

		await entries
			.reduce(async (chain, entry) => {
				await chain;
				const [name, config] = entry;

				assertIsString(name);
				assertIsRecord(config);

				const path: RequiredFileString = `${folder}/${toKebabCase(name)}.ts`;
				const data = parseConfig(folder, config);

				return this.file(path, data);
			}, Promise.resolve());
	},
	indexFile<
		T extends string,
		U extends UnknownRecord | Entries<UnknownRecord>
	>(
		file: GenericString<T, RequiredFileString>,
		input: U,
	) {
		const entries: Entries<UnknownRecord> = (
			Array.isArray(input)
				? input
				: Object.entries(input)
		);

		const kebabCaseNames = entries.map(([name]) => {
			assertIsString(name);
			return toKebabCase(name);
		}).sort();

		const camelCaseNames = kebabCaseNames.map((name) => toCamelCase(name));

		const importStatement = `${camelCaseNames
			.map((camel, i) => `import ${camel} from './${kebabCaseNames[i]}.ts';`)
			.join('\n')}`;

		const declaration = 'configs';

		const declarationStatement = [
			`const ${declaration} = {`,
			`${camelCaseNames.map((camel) => `\t${camel},`).join('\n')}`,
			'};',
		].join('\n');

		const exportStatement = [
			'export {',
			`${camelCaseNames.map((camel) => `\t${camel},`).join('\n')}`,
			'};',
		].join('\n');

		const data = [
			`${NOTICE}`,
			importStatement,
			declarationStatement,
			exportStatement,
			`export default ${declaration}`,
		].join('\n\n');

		this.file(file, data);
	},
};

function parseConfig(
	folder: string,
	data: UnknownRecord,
) {
	const importPath = relative(folder, './src').split(sep).join('/');
	const importFile = `${importPath}/globalTypes.ts`;
	const typeConfig = 'FlatConfig';
	const typePlugin = 'ESLintPlugin';

	const output = [`${NOTICE}\n`];

	let importStatement: string;
	let exportStatement: string;

	if ('plugins' in data) {
		assertIsRecord(data.plugins);

		const plugins = Object.keys(data.plugins) as (keyof PluginPrefix)[];

		if (plugins.length > 1) {
			throw new Error('Expected no overlapping plugins');
		}

		const [plugin] = plugins;
		const pluginPath = pluginPaths[plugin];
		const pluginName = toCamelCase(pluginPath);

		output.push(
			`import ${pluginName} from '${pluginPath}'\n`,
		);

		const stringified = JSON
			.stringify(data).replace(
				`"${plugin}":"${plugin}"`,
				`\n"${plugin}":${pluginName} as unknown as ${typePlugin}\n`,
			);

		importStatement = `import type { ${typeConfig}, ${typePlugin} } from '${importFile}';`;
		exportStatement = `export default ${stringified} as ${typeConfig};`;
	} else {
		importStatement = `import type { ${typeConfig} } from '${importFile}';`;
		exportStatement = `export default ${JSON.stringify(data)} as ${typeConfig};`;
	}

	output.push(importStatement, exportStatement);

	return output.join('\n');
}
