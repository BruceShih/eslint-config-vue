import type antfu from '@antfu/eslint-config';

export type ESLintConfigOptions = Parameters<typeof antfu>[0];
export type ESLintConfigUserConfigs = Parameters<typeof antfu>[1];
