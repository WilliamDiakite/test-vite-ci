import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (env.NODE_ENV === 'production')
    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'app/index.html'),
          },
        },
      },
    }
  else
    return {
      base: '/',
    }
})
