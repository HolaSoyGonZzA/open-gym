import "../styles/globals.css";
import { fetcher } from "../src/services";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

import NextNProgress from "nextjs-progressbar";

import { motion } from "framer-motion";

import { SWRConfig } from "swr";

import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress
        color="#f50"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <ChakraProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <>
            <Header />
            <motion.div
              key={router.route}
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </>
        </SWRConfig>
      </ChakraProvider>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default MyApp;
