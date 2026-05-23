import JsonLd from '../components/JsonLd';
import { createPageMetadata } from '../../lib/seo';
import { getBreadcrumbSchema } from '../../lib/structured-data';

export const metadata = createPageMetadata({
  title: 'Serviços e preços',
  description:
    'Tabela de preços da lavanderia WeWash em Itajaí: lavagem doméstica, industrial para hotéis, promoções de segunda a sexta, cobertores, lençóis e uniformes.',
  path: '/servicos',
  keywords: [
    'preços lavanderia Itajaí',
    'lavagem industrial Itajaí',
    'promoção lavanderia Itajaí',
    'lavagem de cobertor Itajaí',
    'lavanderia para hotéis Itajaí',
  ],
});

export default function ServicosLayout({ children }) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Início', path: '/' },
          { name: 'Serviços', path: '/servicos' },
        ])}
      />
      {children}
    </>
  );
}
