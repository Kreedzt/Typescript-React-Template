module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    "import/resolver": {
      node: {
        paths: ['src'],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
      }
    }
  },
  rules: {
    'react/prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 1,
    'linebreak-style': 0, // 换行方式， 推荐开启此选项，选用LF兼容性高
    'no-trailing-spaces': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-return-assign': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'react/prop-types': 1,
    'comma-dangle': 0,
    'no-unused-vars': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'no-undef': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/anchor-is-valid': 1,
    camelcase: 1,
    'import/prefer-default-export': 1,
    'react/jsx-wrap-multilines': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'lines-between-class-members': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'import/no-unresolved': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0
  }
};
