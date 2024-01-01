import { defineConfig } from 'vitest/config'

import type { UserConfig } from 'vitest/config'

// function


const userConfig: UserConfig = {
  test: {
    globals:      true,
    mockReset:    true,
    clearMocks:   true,
    restoreMocks: true,
    include:      ['**/*.{test,spec}.ts*'],
    coverage:     {
      provider:         'v8',
      reporter:         ['html', 'cobertura', 'text', 'text-summary'],
      all:              true,
      reportsDirectory: './report',
    },
  },
}
export default defineConfig(userConfig)