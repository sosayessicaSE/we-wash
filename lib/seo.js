import { absoluteUrl, getSiteUrl, siteConfig } from './site';

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   path?: string;
 *   keywords?: string[];
 *   noIndex?: boolean;
 *   ogImage?: string;
 * }} options
 */
export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  keywords = siteConfig.keywords,
  noIndex = false,
  ogImage = siteConfig.defaultOgImage,
}) {
  const url = absoluteUrl(path);
  const fullTitle = path === '/' ? title : `${title} | ${siteConfig.name}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : absoluteUrl(ogImage);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
