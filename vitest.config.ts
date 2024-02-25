import { defineConfig } from 'vitest/config'

import type { UserConfig } from 'vitest/config'

// function

const userConfig: UserConfig = {
  test: {
    globals:      true,
    mockReset:    true,
    clearMocks:   true,
    restoreMocks: true,
    include:      ['./src/**/*.test.ts'],
    exclude:      [
      '**/node_modules/**',
      '**/dist/**',
      '**/public/**',
      './copyPublic.js',
    ],
    reporters:  ['junit', 'basic'],
    outputFile: './report/junit.xml',
    setupFiles: ['./src/_vitest/init.ts'],
    coverage:   {
      provider:         'v8',
      reporter:         ['html', 'cobertura', 'text', 'text-summary'],
      reportsDirectory: './report',
      all:              true,
      include:          ['src/**/*.ts'],
    },
  },
}
export default defineConfig(userConfig)
