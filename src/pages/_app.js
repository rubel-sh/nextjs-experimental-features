import Header from "@/components/Header";
import ContextProvider from "@/context/ContextProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Header />
   
          <Component {...pageProps} />
     
      </ContextProvider>
    </QueryClientProvider>
  );
}
