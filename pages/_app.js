import "../styles/globals.scss";
import { ModalProvider } from "../context/Context.js";

function MyApp({ Component, pageProps }) {
    return (
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
    );
}

export default MyApp;
