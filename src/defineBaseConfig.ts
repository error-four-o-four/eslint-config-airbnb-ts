import { isPackageExists } from 'local-pkg';

import type { FlatConfig } from '../scripts/types/configs.ts';

import plugins, { pluginPrefix } from './plugins.ts';

import baseMixed from './configs/merged/base-mixed.ts';
import baseJS from './configs/merged/base-js.ts';

const tsExists = isPackageExists('typescript');

const EXT_JS = [
	'.js', '.mjs',
];
const EXT_TS = [
	'.ts', '.mts',
];

const GLOBS_JS = EXT_JS.map((ext) => `**/*${ext}`);
const GLOBS_TS = EXT_TS.map((ext) => `**/*${ext}`);

// https://github.com/antfu/eslint-config/blob/main/src/utils.ts
const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
	const resolved = await m;
	return (resolved as any).default || resolved;
};

type Awaitable<T> = T | Promise<T>;

// add plugins
baseMixed.plugins = {
	[pluginPrefix.import]: plugins.import,
	[pluginPrefix.node]: plugins.node,
	[pluginPrefix.stylistic]: plugins.stylistic,
};

export default async (...overrides: FlatConfig[]) => {
	if (!tsExists) {
		return [
			baseMixed,
			baseJS,
			...overrides,
		];
	}

	const [
		pluginTS, parserTS,
	] = await Promise.all(
		[
			'@typescript-eslint/eslint-plugin', '@typescript-eslint/parser',
		].map((src) => interopDefault(import(src))),
	);

	// https://esbuild.github.io/api/#glob !!!
	const baseTS = await interopDefault(import('./configs/merged/base-ts.ts'));

	// apply files
	baseMixed.files = [
		...GLOBS_JS, ...GLOBS_TS,
	];

	baseJS.files = GLOBS_JS;
	baseTS.files = GLOBS_TS;

	baseTS.plugins = { [pluginPrefix.typescript]: pluginTS };

	baseTS.languageOptions = {
		...baseTS.languageOptions,
		parser: parserTS,
		parserOptions: {
			...baseTS.languageOptions?.parserOptions || {},
			tsconfigPath: process.cwd(),
		},
	};

	// baseTS.languageOptions.parserOptions = {
	// 	...baseTS.languageOptions.parserOptions,
	// 	tsconfigRootDir: process.cwd(),
	// 	createDefaultProgram: true,
	// };

	return [
		baseMixed,
		baseJS,
		baseTS,
		...overrides,
	];
};