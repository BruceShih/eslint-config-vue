import antfu from '@antfu/eslint-config'

const config = antfu({
  astro: false,
  react: false,
  svelte: false,
  vue: true,
  typescript: true,
})

export { config as bruceshih }