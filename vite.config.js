import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('app is in', env.NODE_ENV, 'mode')

  if (env.NODE_ENV === 'production')
    return {
      base: '/test-vite-ci/',
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
