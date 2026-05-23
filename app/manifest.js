import { siteConfig } from '../lib/site';

export default function manifest() {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f9fafb',
    theme_color: '#60a5fa',
    lang: siteConfig.language,
    icons: [
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/images/WeWash.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
