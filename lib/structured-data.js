import { absoluteUrl, formatAddress, siteConfig } from './site';

export function getLocalBusinessSchema() {
  const { address, geo, openingHours, social } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    '@id': `${absoluteUrl('/')}#business`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl('/'),
    image: absoluteUrl(siteConfig.defaultOgImage),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [social.instagram, social.whatsapp],
    areaServed: {
      '@type': 'City',
      name: 'Itajaí',
      containedInPlace: {
        '@type': 'State',
        name: 'Santa Catarina',
      },
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl('/'),
    inLanguage: siteConfig.language,
    publisher: {
      '@id': `${absoluteUrl('/')}#business`,
    },
  };
}

/**
 * @param {{ name: string; path: string }[]} items
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getAllRootSchemas() {
  return [getWebSiteSchema(), getLocalBusinessSchema()];
}

export { formatAddress };
