import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import Drawer from "@components/common/Drawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Drawer />
    </div>
  );
}

export default MyApp;
