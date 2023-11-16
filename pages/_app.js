import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/kbank_renew.css";
import "@/styles/m_web.css";
import "@/styles/swiper.min.css";
import "@/styles/font.css";

import Layout from "@/components/Layout";
import { RecoilRoot } from "recoil";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>         
        </QueryClientProvider>
      </React.StrictMode>
    </RecoilRoot>

  );
}
