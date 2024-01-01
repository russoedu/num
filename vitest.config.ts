import { defineConfig } from 'vitest/config'

import type { UserConfig } from 'vitest/config'

// function


const userConfig: UserConfig = {
  test: {
    globals:  true,
    /*
     * transformMode: {
     *   web: [/\.([jt]sx?|json|tsx)$/],
     * },
     */
    include:  ['**/*.{test,spec}.ts'],
    coverage: {
      provider:         'v8',
      reporter:         ['html', 'cobertura', 'text', 'text-lcov', 'text-summary'],
      all:              true,
      reportsDirectory: 'report',
    },
  },
}
export default defineConfig(userConfig)