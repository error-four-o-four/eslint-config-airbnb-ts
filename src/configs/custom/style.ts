// FILE GENERATED WITH SCRIPT
import type { FlatConfig } from '../../../scripts/types/configs.ts';

export default {
	name: 'airbnb:style',
	rules: {
		camelcase: [
			'error',
			{
				properties: 'never',
				ignoreDestructuring: false,
			},
		],
		'capitalized-comments': [
			'off',
			'never',
			{
				line: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true,
				},
				block: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true,
				},
			},
		],
		'consistent-this': 'off',
		'func-name-matching': [
			'off',
			'always',
			{
				includeCommonJSModuleExports: false,
				considerPropertyDescriptor: true,
			},
		],
		'func-names': 'warn',
		'func-style': ['off', 'expression'],
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'line-comment-position': [
			'off',
			{
				position: 'above',
				ignorePattern: '',
				applyDefaultPatterns: true,
			},
		],
		'max-depth': ['off', 4],
		'max-lines': [
			'off',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'off',
			{
				max: 50,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true,
			},
		],
		'max-nested-callbacks': 'off',
		'max-params': ['off', 3],
		'max-statements': ['off', 10],
		'multiline-comment-style': ['off', 'starred-block'],
		'new-cap': [
			'error',
			{
				newIsCap: true,
				newIsCapExceptions: [],
				capIsNew: false,
				capIsNewExceptions: [
					'Immutable.Map',
					'Immutable.Set',
					'Immutable.List',
				],
			},
		],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-multi-assign': ['error'],
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-plusplus': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'no-ternary': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			},
		],
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],
		'one-var': ['error', 'never'],
		'operator-assignment': ['error', 'always'],
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'sort-keys': [
			'off',
			'asc',
			{
				caseSensitive: false,
				natural: true,
			},
		],
		'sort-vars': 'off',
		'unicode-bom': ['error', 'never'],
	},
} as FlatConfig;
