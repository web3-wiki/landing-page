import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"/>
        
    </>
  );
}

export default MyApp;
