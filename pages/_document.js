import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Raleway:wght@400;700&family=Roboto:wght@500&display=swap" rel="stylesheet" />


            <body>
                <Main />
               
                <NextScript />
            </body>
        </Html>
    );
}
