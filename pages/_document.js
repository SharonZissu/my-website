import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import "../styles/global";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* Step 5: Output the styles in the head  */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.styleTags}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
