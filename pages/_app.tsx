import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
