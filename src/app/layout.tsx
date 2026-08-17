"use client"
import "../styles/index.css";
import "../../public/assets/scss/main.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="Euro Bangla Travels, flights, Hajj, Umrah, tours, hotels, bus tickets, visa, Bangladesh, Europe" />
        <meta name="description" content="Euro Bangla Travels is a professional travel agency for air tickets, Hajj and Umrah, tour packages, hotels, bus tickets and visa support." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/icons/icon-192.png" type="image/png" sizes="192x192" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Provider>
      </body>
    </html>
  )
}
