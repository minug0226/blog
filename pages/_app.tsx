import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useRouter } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [hasTabBorder, setHasTabBorder] = useState<boolean>(true);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="mx-auto w-full">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
