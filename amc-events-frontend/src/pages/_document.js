import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'AMC | Events';
const APP_DESCRIPTION =
  'AMC | Events';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <meta name="theme-color" content="#fff" />
          <meta property="og:url" content="#" />
          <meta
            name="twitter:title"
            content="AMC | Events"
          />
          <meta
            property="og:description"
            content="AMC | Events"
          />
          <meta property="og:image" content="#" />
          <meta property="og:image:secure_url" content="#" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />

          <meta name="author" content="ThemeTags" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
