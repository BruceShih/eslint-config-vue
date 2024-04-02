# @bruceshih/eslint-config-vue

![version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBruceShih%2Feslint-config-vue%2Fmain%2Fpackage.json&query=%24.version&label=version)
![ci](https://github.com/BruceShih/eslint-config-vue/actions/workflows/ci.yml/badge.svg)

This is my ESLint config for Vue projects, customized from @antfu/eslint-config.

> [!IMPORTANT]
> Please refer to ESLint's documentation. [ESLint Configuration Files (New)](https://eslint.org/docs/latest/use/configure/configuration-files-new)

## Install

`pnpm i -D eslint @bruceshih/eslint-config-vue`

## Usage

```javascript
// eslint.config.js
import bruceshih from '@bruceshih/eslint-config-vue'

export default bruceshih()
```
