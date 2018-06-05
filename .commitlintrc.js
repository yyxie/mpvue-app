module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'docs',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test']
    ]
  }
}
