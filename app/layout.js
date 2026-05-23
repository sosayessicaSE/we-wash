import './styles/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>WeWash</title>
        <link rel="icon" href="/images/wewash.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
