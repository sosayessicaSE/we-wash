import JsonLd from '../components/JsonLd';
import { createPageMetadata } from '../../lib/seo';
import { getBreadcrumbSchema } from '../../lib/structured-data';

export const metadata = createPageMetadata({
  title: 'Sobre nós',
  description:
    'Conheça a história da WeWash: tradição uruguaia em lavanderia, paixão por qualidade e compromisso com a comunidade de Itajaí e Santa Catarina.',
  path: '/sobre',
  keywords: [
    'sobre WeWash',
    'lavanderia Itajaí história',
    'lavanderia uruguaia Santa Catarina',
    'WeWash Itajaí',
  ],
  ogImage: '/images/local.jpg',
});

export default function SobreLayout({ children }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: 'Sobre nós', path: '/sobre' },
        ])}
      />
      {children}
    </>
  );
}
