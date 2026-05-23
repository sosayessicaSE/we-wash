import { absoluteUrl, getSiteUrl } from '../lib/site';

export default function robots() {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl,
  };
}
