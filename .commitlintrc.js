module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      2,
      'always',
      ['camel-case', 'kebab-case', 'lower-case', 'snake-case']
    ]
  }
}
