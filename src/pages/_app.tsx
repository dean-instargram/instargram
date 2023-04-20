import "@/styles/globals.css";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
