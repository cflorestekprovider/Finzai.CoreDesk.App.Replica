/* eslint-disable no-alert */
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';  // Importar fileURLToPath desde 'url'
import { dirname } from 'path';  // Importar dirname de 'path'
import { defineConfig } from 'vite'; 
 
// Obtener el directorio del archivo actual (equivalente a __dirname en Node.js)
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/CoreDesk/' : '/',
  server: {
    port: 8080,
    host: '0.0.0.0',  // Asegura que sea accesible desde fuera del contenedor 
    cors: {
      origin: '*'
    }
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },

  plugins: [
    react(),
    federation({
      name: 'coreDesk',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,  // ✅ Separar CSS en un archivo independiente
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/style_coreDesk.css'; // ✅ Nombre fijo para el CSS
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
}));