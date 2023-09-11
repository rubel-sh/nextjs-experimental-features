import Header from "@/components/Header";
import ContextProvider from "@/context/ContextProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
    const queryClient = new QueryClient();

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <QueryClientProvider client={queryClient}>
            <ContextProvider>
                <Header />
                {getLayout(<Component {...pageProps} />)}
            </ContextProvider>
        </QueryClientProvider>
    );
}
