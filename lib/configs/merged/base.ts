/** @file GENERATED WITH SCRIPT */
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { FlatConfig, ESLintPlugin } from '../../../src/globalTypes.ts';

export default {
	name: 'airbnb:base',
	plugins: {
		import: eslintPluginImportX as unknown as ESLintPlugin,
		node: eslintPluginN as unknown as ESLintPlugin,
		style: stylisticEslintPlugin as unknown as ESLintPlugin,
	},
	languageOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			ecmaFeatures: {
				globalReturn: true,
				jsx: false,
				generators: false,
				objectLiteralDuplicateProperties: false,
			},
		},
		globals: {
			__dirname: false,
			__filename: false,
			AbortController: false,
			AbortSignal: false,
			atob: false,
			Blob: false,
			BroadcastChannel: false,
			btoa: false,
			Buffer: false,
			ByteLengthQueuingStrategy: false,
			clearImmediate: false,
			clearInterval: false,
			clearTimeout: false,
			CompressionStream: false,
			console: false,
			CountQueuingStrategy: false,
			crypto: false,
			Crypto: false,
			CryptoKey: false,
			CustomEvent: false,
			DecompressionStream: false,
			DOMException: false,
			Event: false,
			EventTarget: false,
			exports: true,
			fetch: false,
			File: false,
			FormData: false,
			global: false,
			Headers: false,
			Iterator: false,
			MessageChannel: false,
			MessageEvent: false,
			MessagePort: false,
			module: false,
			navigator: false,
			Navigator: false,
			performance: false,
			Performance: false,
			PerformanceEntry: false,
			PerformanceMark: false,
			PerformanceMeasure: false,
			PerformanceObserver: false,
			PerformanceObserverEntryList: false,
			PerformanceResourceTiming: false,
			process: false,
			queueMicrotask: false,
			ReadableByteStreamController: false,
			ReadableStream: false,
			ReadableStreamBYOBReader: false,
			ReadableStreamBYOBRequest: false,
			ReadableStreamDefaultController: false,
			ReadableStreamDefaultReader: false,
			Request: false,
			require: false,
			Response: false,
			setImmediate: false,
			setInterval: false,
			setTimeout: false,
			structuredClone: false,
			SubtleCrypto: false,
			TextDecoder: false,
			TextDecoderStream: false,
			TextEncoder: false,
			TextEncoderStream: false,
			TransformStream: false,
			TransformStreamDefaultController: false,
			URL: false,
			URLSearchParams: false,
			WebAssembly: false,
			WebSocket: false,
			WritableStream: false,
			WritableStreamDefaultController: false,
			WritableStreamDefaultWriter: false,
			AggregateError: false,
			Array: false,
			ArrayBuffer: false,
			Atomics: false,
			BigInt: false,
			BigInt64Array: false,
			BigUint64Array: false,
			Boolean: false,
			DataView: false,
			Date: false,
			decodeURI: false,
			decodeURIComponent: false,
			encodeURI: false,
			encodeURIComponent: false,
			Error: false,
			escape: false,
			eval: false,
			EvalError: false,
			FinalizationRegistry: false,
			Float32Array: false,
			Float64Array: false,
			Function: false,
			globalThis: false,
			Infinity: false,
			Int16Array: false,
			Int32Array: false,
			Int8Array: false,
			Intl: false,
			isFinite: false,
			isNaN: false,
			JSON: false,
			Map: false,
			Math: false,
			NaN: false,
			Number: false,
			Object: false,
			parseFloat: false,
			parseInt: false,
			Promise: false,
			Proxy: false,
			RangeError: false,
			ReferenceError: false,
			Reflect: false,
			RegExp: false,
			Set: false,
			SharedArrayBuffer: false,
			String: false,
			Symbol: false,
			SyntaxError: false,
			TypeError: false,
			Uint16Array: false,
			Uint32Array: false,
			Uint8Array: false,
			Uint8ClampedArray: false,
			undefined: false,
			unescape: false,
			URIError: false,
			WeakMap: false,
			WeakRef: false,
			WeakSet: false,
		},
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.json'],
			},
			typescript: {
				extensions: [
					'.js',
					'.mjs',
					'.cjs',
				],
			},
		},
		'import/extensions': [
			'.js',
			'.mjs',
			'.cjs',
		],
		'import/core-modules': [],
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
		'import/parsers': {
			espree: [
				'.js',
				'.mjs',
				'.cjs',
			],
		},
	},
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': 0,
		'array-bracket-spacing': 0,
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
			},
		],
		'array-element-newline': 0,
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],
		'arrow-parens': 0,
		'arrow-spacing': 0,
		'block-scoped-var': 'error',
		'block-spacing': 0,
		'brace-style': 0,
		'callback-return': 0,
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
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [],
			},
		],
		'comma-dangle': 0,
		'comma-spacing': 0,
		'comma-style': 0,
		complexity: ['off', 20],
		'computed-property-spacing': 0,
		'consistent-return': 'error',
		'consistent-this': 'off',
		'constructor-super': 'error',
		curly: ['error', 'multi-line'],
		'default-case': [
			'error',
			{
				commentPattern: '^no default$',
			},
		],
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': 0,
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
			},
		],
		'eol-last': 0,
		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore',
			},
		],
		'for-direction': 'error',
		'func-call-spacing': 0,
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
		'function-call-argument-newline': 0,
		'function-paren-newline': 0,
		'generator-star-spacing': 0,
		'getter-return': [
			'error',
			{
				allowImplicit: true,
			},
		],
		'global-require': 0,
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'handle-callback-err': 0,
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': 0,
		indent: 0,
		'init-declarations': 'off',
		'jsx-quotes': 0,
		'key-spacing': 0,
		'keyword-spacing': 0,
		'line-comment-position': 0,
		'linebreak-style': 0,
		'lines-around-comment': 0,
		'lines-around-directive': 0,
		'lines-between-class-members': 0,
		'max-classes-per-file': ['error', 1],
		'max-depth': ['off', 4],
		'max-len': 0,
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
		'max-statements-per-line': 0,
		'multiline-comment-style': 0,
		'multiline-ternary': 0,
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
		'new-parens': 0,
		'newline-after-var': 0,
		'newline-before-return': 0,
		'newline-per-chained-call': 0,
		'no-alert': 'warn',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-buffer-constructor': 0,
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-catch-shadow': 0,
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-confusing-arrow': 0,
		'no-console': 'warn',
		'no-const-assign': 'error',
		'no-constant-condition': 'warn',
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-function': [
			'error',
			{
				allow: [
					'arrowFunctions',
					'functions',
					'methods',
				],
			},
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-parens': 0,
		'no-extra-semi': 0,
		'no-fallthrough': 'error',
		'no-floating-decimal': 0,
		'no-func-assign': 'error',
		'no-global-assign': [
			'error',
			{
				exceptions: [],
			},
		],
		'no-implicit-coercion': [
			'off',
			{
				boolean: false,
				number: true,
				string: true,
				allow: [],
			},
		],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [
			'error',
			{
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': [
			'off',
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 0,
		'no-mixed-requires': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-multi-assign': ['error'],
		'no-multi-spaces': 0,
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 0,
		'no-native-reassign': 0,
		'no-negated-condition': 'off',
		'no-negated-in-lhs': 0,
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 0,
		'no-new-require': 0,
		'no-new-symbol': 0,
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-object-constructor': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'acc',
					'accumulator',
					'e',
					'ctx',
					'context',
					'req',
					'request',
					'res',
					'response',
					'$scope',
					'staticContext',
				],
			},
		],
		'no-path-concat': 0,
		'no-plusplus': 'error',
		'no-process-env': 0,
		'no-process-exit': 0,
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: ['default', 'then'],
			},
		],
		'no-restricted-globals': [
			'error',
			{
				name: 'isFinite',
				message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
			},
			{
				name: 'isNaN',
				message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
			},
			'addEventListener',
			'blur',
			'close',
			'closed',
			'confirm',
			'defaultStatus',
			'defaultstatus',
			'event',
			'external',
			'find',
			'focus',
			'frameElement',
			'frames',
			'history',
			'innerHeight',
			'innerWidth',
			'length',
			'location',
			'locationbar',
			'menubar',
			'moveBy',
			'moveTo',
			'name',
			'onblur',
			'onerror',
			'onfocus',
			'onload',
			'onresize',
			'onunload',
			'open',
			'opener',
			'opera',
			'outerHeight',
			'outerWidth',
			'pageXOffset',
			'pageYOffset',
			'parent',
			'print',
			'removeEventListener',
			'resizeBy',
			'resizeTo',
			'screen',
			'screenLeft',
			'screenTop',
			'screenX',
			'screenY',
			'scroll',
			'scrollbars',
			'scrollBy',
			'scrollTo',
			'scrollX',
			'scrollY',
			'self',
			'status',
			'statusbar',
			'stop',
			'toolbar',
			'top',
		],
		'no-restricted-imports': [
			'off',
			{
				paths: [],
				patterns: [],
			},
		],
		'no-restricted-modules': 0,
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],
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
		'no-return-assign': ['error', 'always'],
		'no-return-await': 0,
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true,
			},
		],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-setter-return': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-spaced-func': 0,
		'no-sparse-arrays': 'error',
		'no-sync': 0,
		'no-tabs': 0,
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 0,
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			},
		],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable': 'error',
		'no-unreachable-loop': [
			'error',
			{
				ignore: [],
			},
		],
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		],
		'no-unused-labels': 'error',
		'no-unused-private-class-members': 'off',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
			},
		],
		'no-useless-backreference': 'error',
		'no-useless-call': 'off',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': [
			'error',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': [
			'off',
			{
				terms: [
					'todo',
					'fixme',
					'xxx',
				],
				location: 'start',
			},
		],
		'no-whitespace-before-property': 0,
		'no-with': 'error',
		'nonblock-statement-body-position': 0,
		'object-curly-newline': 0,
		'object-curly-spacing': 0,
		'object-property-newline': 0,
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 0,
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': 0,
		'padded-blocks': 0,
		'padding-line-between-statements': 0,
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-destructuring': [
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
			{
				enforceForRenamedProperties: false,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true,
			},
		],
		'prefer-reflect': 0,
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': 0,
		quotes: 0,
		radix: 'error',
		'require-atomic-updates': 'off',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'rest-spread-spacing': 0,
		semi: 0,
		'semi-spacing': 0,
		'semi-style': 0,
		'sort-imports': [
			'off',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: [
					'none',
					'all',
					'multiple',
					'single',
				],
			},
		],
		'sort-keys': [
			'off',
			'asc',
			{
				caseSensitive: false,
				natural: true,
			},
		],
		'sort-vars': 'off',
		'space-before-blocks': 0,
		'space-before-function-paren': 0,
		'space-in-parens': 0,
		'space-infix-ops': 0,
		'space-unary-ops': 0,
		'spaced-comment': 0,
		strict: ['error', 'never'],
		'switch-colon-spacing': 0,
		'symbol-description': 'error',
		'template-curly-spacing': 0,
		'template-tag-spacing': 0,
		'unicode-bom': ['error', 'never'],
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
		'vars-on-top': 'error',
		'wrap-iife': 0,
		'wrap-regex': 0,
		'yield-star-spacing': 0,
		yoda: 'error',
		'import/default': 'off',
		'import/dynamic-import-chunkname': [
			'off',
			{
				importFunctions: [],
				webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
			},
		],
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
			},
		],
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/imports-first': 0,
		'import/max-dependencies': [
			'off',
			{
				max: 10,
			},
		],
		'import/named': 'error',
		'import/namespace': 'off',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': [
			'off',
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowLiteral: false,
				allowObject: false,
			},
		],
		'import/no-commonjs': 'off',
		'import/no-cycle': [
			'error',
			{
				maxDepth: '∞',
			},
		],
		'import/no-default-export': 'off',
		'import/no-deprecated': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'test/**',
					'tests/**',
					'spec/**',
					'**/__tests__/**',
					'**/__mocks__/**',
					'test.{js,jsx}',
					'test-*.{js,jsx}',
					'**/*{.,_}{test,spec}.{js,jsx}',
					'**/jest.config.js',
					'**/jest.setup.js',
					'**/vue.config.js',
					'**/webpack.config.js',
					'**/webpack.config.*.js',
					'**/rollup.config.js',
					'**/rollup.config.*.js',
					'**/gulpfile.js',
					'**/gulpfile.*.js',
					'**/Gruntfile{,.js}',
					'**/protractor.conf.js',
					'**/protractor.conf.*.js',
					'**/karma.conf.js',
					'**/.eslintrc.js',
					'**/eslint.config.js',
					'**/vite.config.js',
					'**/vite.config.*.js',
				],
				optionalDependencies: false,
			},
		],
		'import/no-import-module-exports': [
			'error',
			{
				exceptions: [],
			},
		],
		'import/no-internal-modules': [
			'off',
			{
				allow: [],
			},
		],
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-packages': 'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
				caseSensitive: true,
			},
		],
		'import/no-unused-modules': [
			'off',
			{
				ignoreExports: [],
				missingExports: true,
				unusedExports: true,
			},
		],
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: true,
			},
		],
		'import/no-webpack-loader-syntax': 'error',
		'import/order': [
			'error',
			{
				groups: [
					[
						'builtin',
						'external',
						'internal',
					],
				],
			},
		],
		'import/prefer-default-export': 'error',
		'import/unambiguous': 'off',
		'node/callback-return': 'off',
		'node/global-require': 'error',
		'node/handle-callback-err': 'off',
		'node/no-mixed-requires': ['off', false],
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',
		'node/no-process-env': 'off',
		'node/no-process-exit': 'off',
		'node/no-sync': 'off',
		'style/array-bracket-newline': ['error', 'consistent'],
		'style/array-bracket-spacing': ['error', 'never'],
		'style/array-element-newline': [
			'error',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'style/arrow-parens': ['error', 'always'],
		'style/arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'style/block-spacing': ['error', 'always'],
		'style/brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		'style/comma-dangle': ['error', 'always-multiline'],
		'style/comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'style/comma-style': [
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
		'style/computed-property-spacing': ['error', 'never'],
		'style/dot-location': ['error', 'property'],
		'style/eol-last': ['error', 'always'],
		'style/function-call-argument-newline': ['error', 'consistent'],
		'style/function-call-spacing': ['error', 'never'],
		'style/function-paren-newline': ['error', 'multiline-arguments'],
		'style/generator-star-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'style/implicit-arrow-linebreak': ['error', 'beside'],
		'style/indent': [
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
		'style/jsx-quotes': ['off', 'prefer-double'],
		'style/key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'style/keyword-spacing': [
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
		'style/line-comment-position': [
			'off',
			{
				position: 'above',
				ignorePattern: '',
				applyDefaultPatterns: true,
			},
		],
		'style/linebreak-style': ['error', 'unix'],
		'style/lines-around-comment': 'off',
		'style/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: false,
			},
		],
		'style/max-len': [
			'error',
			{
				code: 100,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'style/max-statements-per-line': [
			'off',
			{
				max: 1,
			},
		],
		'style/multiline-comment-style': ['off', 'starred-block'],
		'style/multiline-ternary': ['off', 'never'],
		'style/new-parens': 'error',
		'style/newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 4,
			},
		],
		'style/no-confusing-arrow': [
			'error',
			{
				allowParens: true,
			},
		],
		'style/no-extra-parens': [
			'off',
			'all',
			{
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
				ignoreJSX: 'all',
				enforceForArrowConditionals: false,
			},
		],
		'style/no-extra-semi': 'error',
		'style/no-floating-decimal': 'error',
		'style/no-mixed-operators': [
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
		'style/no-mixed-spaces-and-tabs': 'error',
		'style/no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false,
			},
		],
		'style/no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0,
			},
		],
		'style/no-tabs': 'error',
		'style/no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		'style/no-whitespace-before-property': 'error',
		'style/nonblock-statement-body-position': [
			'error',
			'beside',
			{
				overrides: {},
			},
		],
		'style/object-curly-newline': [
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
		'style/object-curly-spacing': ['error', 'always'],
		'style/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'style/one-var-declaration-per-line': ['error', 'always'],
		'style/operator-linebreak': [
			'error',
			'before',
			{
				overrides: {
					'=': 'none',
				},
			},
		],
		'style/padded-blocks': [
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
		'style/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'directive',
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
		],
		'style/quote-props': [
			'error',
			'as-needed',
			{
				keywords: false,
				unnecessary: true,
				numbers: false,
			},
		],
		'style/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'style/rest-spread-spacing': ['error', 'never'],
		'style/semi': ['error', 'always'],
		'style/semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'style/semi-style': ['error', 'last'],
		'style/space-before-blocks': 'error',
		'style/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'style/space-in-parens': ['error', 'never'],
		'style/space-infix-ops': 'error',
		'style/space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'style/spaced-comment': [
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
		'style/switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'style/template-curly-spacing': ['error', 'never'],
		'style/template-tag-spacing': ['error', 'never'],
		'style/wrap-iife': [
			'error',
			'outside',
			{
				functionPrototypeMethods: false,
			},
		],
		'style/wrap-regex': 'off',
		'style/yield-star-spacing': ['error', 'after'],
	},
} satisfies FlatConfig;
