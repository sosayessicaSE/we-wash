import JsonLd from '../components/JsonLd';
import { createPageMetadata } from '../../lib/seo';
import { getBreadcrumbSchema } from '../../lib/structured-data';
import { formatAddress, siteConfig } from '../../lib/site';

export const metadata = createPageMetadata({
  title: 'Contato',
  description: `Entre em contato com a WeWash em Itajaí. Endereço: ${formatAddress()}. WhatsApp ${siteConfig.phoneDisplay}. Horário: seg–sex 9h–13h e 13h–18h, fechado sáb e dom.`,
  path: '/contato',
  keywords: [
    'contato lavanderia Itajaí',
    'WeWash endereço',
    'lavanderia Fazenda Itajaí',
    'WhatsApp lavanderia Itajaí',
  ],
});

export default function ContatoLayout({ children }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: 'Contato', path: '/contato' },
        ])}
      />
      {children}
    </>
  );
}
