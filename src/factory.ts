import antfu from '@antfu/eslint-config'
import type { ESLintConfigOptions, ESLintConfigUserConfigs } from './types'

const configDefaults: ESLintConfigOptions = {
  astro: false,
  react: false,
  svelte: false,
  jsx: false,
  vue: true,
  typescript: true,
  formatters: true,
}

const userConfigDefaults: ESLintConfigUserConfigs = {}

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
export function bruceshih(options?: ESLintConfigOptions, ...userConfigs: ESLintConfigUserConfigs[]): ReturnType<typeof antfu> {
  return antfu({ ...configDefaults, ...options }, ...userConfigs, userConfigDefaults)
}
