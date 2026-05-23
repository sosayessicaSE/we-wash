import JsonLd from './components/JsonLd';
import { getAllRootSchemas } from '../lib/structured-data';
import { createPageMetadata, getMetadataBase } from '../lib/seo';
import { siteConfig } from '../lib/site';
import './styles/globals.css';

export const metadata = {
  metadataBase: getMetadataBase(),
  ...createPageMetadata({
    title: `${siteConfig.name} — Lavanderia em Itajaí, SC`,
    description: siteConfig.description,
    path: '/',
  }),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Lavanderia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <JsonLd data={getAllRootSchemas()} />
        {children}
      </body>
    </html>
  );
}
