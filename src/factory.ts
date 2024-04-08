import antfu from '@antfu/eslint-config'
import type { ESLintConfigOptions, ESLintConfigUserConfigs } from './types'

const configDefaults: ESLintConfigOptions = {
  formatters: {
    prettierOptions: {
      endOfLine: 'lf',
      trailingComma: 'none',
      printWidth: 100,
      proseWrap: 'always'
    }
  },
  vue: true
}

const userConfigDefaults: ESLintConfigUserConfigs = [
  {
    rules: {
      'style/comma-dangle': ['error', 'never'],
      'style/max-len': ['error', { code: 100 }],
      'style/multiline-ternary': ['error', 'always-multiline'],
      'style/no-tabs': ['error', { allowIndentationTabs: false }],
      'style/quotes': ['error', 'single']
    }
  }
]

/**
 * Construct an array of ESLint flat config items.
 *
 * @param {ESLintConfigOptions} options
 *  The options for generating the ESLint configurations.
 * @param {ESLintConfigUserConfigs} userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns {ReturnType<typeof antfu>}
 *  The merged ESLint configurations.
 */
export function bruceshih(
  options?: ESLintConfigOptions,
  ...userConfigs: ESLintConfigUserConfigs[]
): ReturnType<typeof antfu> {
  return antfu({ ...configDefaults, ...options }, ...userConfigs, userConfigDefaults)
}
