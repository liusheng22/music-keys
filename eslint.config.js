import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    javascript: true,
    typescript: true
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/operator-linebreak': ['error', 'before'],
      'vue/custom-event-name-casing': ['error', 'kebab-case']
    }
  },
  {
    rules: {
      'style/semi': ['error', 'never'],
      'style/comma-dangle': ['error', 'never']
    }
  }
)
