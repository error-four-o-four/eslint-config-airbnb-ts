/** @file GENERATED WITH SCRIPT */
import type { FlatConfig } from '../../../src/globalTypes.ts';

export default {
	rules: {
		'array-bracket-newline': ['off', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': [
			'off',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'block-spacing': ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
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
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': [
			'error',
			'last',
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
					NewExpression: false,
				},
			},
		],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': 'off',
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
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
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		indent: [
			'error',
			2,
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				ignoredNodes: [
					'JSXElement',
					'JSXElement > *',
					'JSXAttribute',
					'JSXIdentifier',
					'JSXNamespacedName',
					'JSXMemberExpression',
					'JSXSpreadAttribute',
					'JSXExpressionContainer',
					'JSXOpeningElement',
					'JSXClosingElement',
					'JSXFragment',
					'JSXOpeningFragment',
					'JSXClosingFragment',
					'JSXText',
					'JSXEmptyExpression',
					'JSXSpreadChild',
				],
				ignoreComments: false,
			},
		],
		'jsx-quotes': ['off', 'prefer-double'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
				overrides: {
					return: {
						after: true,
					},
					throw: {
						after: true,
					},
					case: {
						after: true,
					},
				},
			},
		],
		'line-comment-position': [
			'off',
			{
				position: 'above',
				ignorePattern: '',
				applyDefaultPatterns: true,
			},
		],
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'off',
		'lines-around-directive': [
			'error',
			{
				before: 'always',
				after: 'always',
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: false,
			},
		],
		'max-depth': ['off', 4],
		'max-len': [
			'error',
			100,
			2,
			{
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
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
		'max-statements-per-line': [
			'off',
			{
				max: 1,
			},
		],
		'multiline-comment-style': ['off', 'starred-block'],
		'multiline-ternary': ['off', 'never'],
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
		'new-parens': 'error',
		'newline-after-var': 'off',
		'newline-before-return': 'off',
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 4,
			},
		],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '*'],
					['%', '/'],
					['/', '*'],
					[
						'&',
						'|',
						'<<',
						'>>',
						'>>>',
					],
					[
						'==',
						'!=',
						'===',
						'!==',
					],
					['&&', '||'],
				],
				allowSamePrecedence: false,
			},
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': ['error'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0,
			},
		],
		'no-negated-condition': 'off',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
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
		'no-spaced-func': 'error',
		'no-tabs': 'error',
		'no-ternary': 'off',
		'no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		'no-underscore-dangle': [
			'error',
			{
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			},
		],
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [
			'error',
			'beside',
			{
				overrides: {},
			},
		],
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
			},
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'none',
				},
			},
		],
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'never',
				switches: 'never',
			},
			{
				allowSingleLineBlocks: true,
			},
		],
		'padding-line-between-statements': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'quote-props': [
			'error',
			'as-needed',
			{
				keywords: false,
				unnecessary: true,
				numbers: false,
			},
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'require-jsdoc': 'off',
		semi: ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'semi-style': ['error', 'last'],
		'sort-keys': [
			'off',
			'asc',
			{
				caseSensitive: false,
				natural: true,
			},
		],
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '+'],
					markers: [
						'=',
						'!',
						'/',
					],
				},
				block: {
					exceptions: ['-', '+'],
					markers: [
						'=',
						'!',
						':',
						'::',
					],
					balanced: true,
				},
			},
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'wrap-regex': 'off',
	},
} satisfies FlatConfig;
