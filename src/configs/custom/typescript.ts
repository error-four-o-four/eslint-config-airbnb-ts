// FILE GENERATED WITH SCRIPT
import type { FlatConfig } from '../../../scripts/types/configs.ts';

export default {
	name: 'airbnb:typescript',
	languageOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			project: true,
		},
	},
	settings: {
		'import/resolver': {
			node: { extensions: ['.json'] },
			typescript: {
				extensions: [
					'.js',
					'.mjs',
					'.ts',
					'.mts',
				],
			},
		},
		'import/extensions': [
			'.js',
			'.mjs',
			'.ts',
			'.mts',
		],
		'import/core-modules': [],
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.js',
				'.mjs',
				'.ts',
				'.mts',
			],
		},
		'import/external-module-folders': ['node_modules', 'node_modules/@types'],
	},
	rules: {
		'class-methods-use-this': 0,
		'consistent-return': 0,
		'default-param-last': 0,
		'dot-notation': 0,
		'init-declarations': 0,
		'max-params': 0,
		'no-array-constructor': 0,
		'no-dupe-class-members': 0,
		'no-empty-function': 0,
		'no-implied-eval': 0,
		'no-invalid-this': 0,
		'no-loop-func': 0,
		'no-loss-of-precision': 0,
		'no-magic-numbers': 0,
		'no-redeclare': 0,
		'no-restricted-imports': 0,
		'no-shadow': 0,
		'no-throw-literal': 0,
		'no-unused-expressions': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'no-useless-constructor': 0,
		'prefer-destructuring': 0,
		'prefer-promise-reject-errors': 0,
		'require-await': 0,
		'typescript/class-methods-use-this': ['error', { exceptMethods: [] }],
		'typescript/consistent-return': 'error',
		'typescript/default-param-last': 'error',
		'typescript/dot-notation': ['error', { allowKeywords: true }],
		'typescript/init-declarations': 'off',
		'typescript/max-params': ['off', 3],
		'typescript/no-array-constructor': 'error',
		'typescript/no-dupe-class-members': 'error',
		'typescript/no-empty-function': [
			'error',
			{
				allow: [
					'arrowFunctions',
					'functions',
					'methods',
				],
			},
		],
		'typescript/no-implied-eval': 'error',
		'typescript/no-invalid-this': 'off',
		'typescript/no-loop-func': 'error',
		'typescript/no-loss-of-precision': 'error',
		'typescript/no-magic-numbers': [
			'off',
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'typescript/no-redeclare': 'error',
		'typescript/no-restricted-imports': [
			'off',
			{
				paths: [],
				patterns: [],
			},
		],
		'typescript/no-shadow': 'error',
		'typescript/no-throw-literal': 'error',
		'typescript/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		],
		'typescript/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'typescript/no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
			},
		],
		'typescript/no-useless-constructor': 'error',
		'typescript/prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
			{ enforceForRenamedProperties: false },
		],
		'typescript/prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
		'typescript/require-await': 'off',
	},
} as FlatConfig;
