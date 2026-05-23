/** @typedef {import('next').Metadata} Metadata */

export const siteConfig = {
  name: 'WeWash',
  legalName: 'WeWash Lavanderia',
  tagline: 'Lavanderia em Itajaí com qualidade e tradição',
  description:
    'Lavanderia em Itajaí, SC: lavagem doméstica e industrial, secagem, passadoria e promoções semanais. Atendimento via WhatsApp, retirada na loja e cuidado premium com suas roupas.',
  locale: 'pt_BR',
  language: 'pt-BR',
  email: 'wewashbr@gmail.com',
  phone: '+5547991769357',
  phoneDisplay: '(47) 99176-9357',
  address: {
    street: 'Avenida Sete de Setembro, 906',
    neighborhood: 'Fazenda',
    city: 'Itajaí',
    state: 'SC',
    postalCode: '88301-202',
    country: 'BR',
  },
  geo: {
    latitude: -26.914273793270688,
    longitude: -48.65881332368758,
  },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  social: {
    instagram: 'https://www.instagram.com/wewashbr',
    whatsapp: 'https://wa.me/5547991769357',
  },
  defaultOgImage: '/images/wewash.png',
  keywords: [
    'lavanderia Itajaí',
    'lavanderia Santa Catarina',
    'lavagem de roupas Itajaí',
    'lavanderia self service Itajaí',
    'lavanderia industrial Itajaí',
    'lavagem de cobertor Itajaí',
    'lavanderia perto de mim Itajaí',
    'WeWash',
  ],
};

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, '');
  return 'https://www.wewash.com.br';
}

export function absoluteUrl(path = '') {
  const base = getSiteUrl();
  if (!path || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatAddress() {
  const { street, neighborhood, city, state, postalCode } = siteConfig.address;
  return `${street}, ${neighborhood}, ${city} - ${state}, ${postalCode}`;
}
