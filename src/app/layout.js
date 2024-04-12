import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const feather = localFont({
  src: [
    {
      path: '../../public/Feathercut-LightItalic.ttf',
      weight: '400',
      style: 'normal',
    },]})

export const metadata = {
  title: "Montagab",
  description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={feather.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <title>Montagab</title>
      </Head>
      <body className={feather.className}>
        <div>
          <Header />
          <Sidebar />
          <div className="wrapper min-h-[77.1vh] xl:min-h-[90.91vh] pt-40 xl:pt-0">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
