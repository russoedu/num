import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:      [react()],
  base:         '/num/',
  optimizeDeps: {
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@emotion/styled_default',
      '@mui/material/Tooltip',
      '@mui/material/Unstable_Grid2',
      '@mui/icons-material/HighlightOff',
    ],
  },
})
