import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="h-full">
        <Head>
          <meta name="application-name" content="Brand Title" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Brand Title" />
          <meta name="description" content="Cook your heart out!" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#3a7ff3" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="apple-touch-icon" href="/icons-auto/apple-icon-180.png" />
          {/* <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          /> */}

          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          /> */}
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons-auto/manifest-icon-192.maskable.png"
            color="#3a7ff3"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          /> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://nextjs.misikoff.com" />
          <meta name="twitter:title" content="Brand Title" />
          <meta name="twitter:description" content="Cook your heart out!" />
          <meta
            name="twitter:image"
            content="https://nextjs.misikoff.com/icons/manifest-icon-192.maskable.png"
          />
          <meta name="twitter:creator" content="@TMisikoff" />
          <meta property="og:type" content="website" key="og:type" />
          <meta property="og:title" content="Brand Title" key="og:title" />
          <meta
            property="og:description"
            content="Cook your heart out!"
            key="og:description"
          />
          <meta property="og:site_name" content="Brand Title" />
          <meta
            property="og:url"
            content="https://nextjs.misikoff.com"
            key="og:url"
          />
          <meta
            property="og:image"
            content="https://nextjs.misikoff.com/icons/apple-icon-180.png"
            key="og:image"
          />

          {/* apple splash screen images */}
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-2048-2732.jpg"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-1668-2224.jpg"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-1536-2048.jpg"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-1125-2436.jpg"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-1242-2208.jpg"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-750-1334.jpg"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons-auto/apple-splash-640-1136.jpg"
            sizes="640x1136"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
