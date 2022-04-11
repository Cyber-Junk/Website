import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import Particle from "../Components/Particle";
import theme from "../styles/theme";
import Mask from "../Components/Mask";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Particle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
