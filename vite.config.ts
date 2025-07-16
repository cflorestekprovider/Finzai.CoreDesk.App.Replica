/* eslint-disable no-alert */ 
import federation from '@originjs/vite-plugin-federation'; 
import react from '@vitejs/plugin-react'; 
import path from 'path'; 
import { defineConfig } from 'vite'; 
 
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Saas/CoreDesk/' : '/',
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
    cssCodeSplit: false, 
  }, 
}));