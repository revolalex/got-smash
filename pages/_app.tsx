import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css"
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <SessionProvider session={pageProps.session}>
      <NavMenu/>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
