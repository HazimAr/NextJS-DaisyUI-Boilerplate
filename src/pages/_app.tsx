import "../styles/global.css";
import { Inter } from "@next/font/google";
const inter = Inter();

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
