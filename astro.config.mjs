// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    site: 'https://haw-hamburg-oe-emi-inf.github.io',
    output: "static",
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});