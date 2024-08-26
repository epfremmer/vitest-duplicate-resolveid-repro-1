import { defineConfig } from 'vitest/config';
import myPlugin from './my-plugin';

export default defineConfig({
  plugins: [
    myPlugin(),
  ],
});