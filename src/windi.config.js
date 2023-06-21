import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  scan: {
    dirs: ['./src'],
    exclude: ['node_modules', '.git', './*.{js,jsx,ts,tsx}'],
  },
});
