import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://miroso.tech',
  integrations: [tailwind()],
});
