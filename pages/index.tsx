import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { THEME_BLUE, THEME_YELLOW } from "../constants/Color";
import styles from "../styles/Home.module.css";

export default function Home() {
  const gradient: string =
    "linear(to-r, " + THEME_YELLOW + ", " + THEME_BLUE + ")";

  const router = useRouter();

  return (
    <Flex direction="column" minHeight="100vh">
      <Head>
        <title>Clique.Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box position="fixed" top="2rem" right="2rem">
        <Button
          colorScheme="yellow"
          rightIcon={<ArrowForwardIcon />}
          onClick={() => {
            router.push("/app");
          }}
        >
          Launch App
        </Button>
      </Box>

      {/* Title Body */}
      <Flex
        w="100%"
        h="80rem"
        direction="column"
        justifyContent="center"
        bgGradient={gradient}
      >
        <Heading as="h1" size="4xl" marginStart="12rem" marginBottom="2rem">
          Clique.Finance
        </Heading>
        <Text fontSize="6xl" marginStart="20rem">
          Invest together.
        </Text>
      </Flex>

      {/* Informational Body */}
      <Flex w="100%" h="70rem" direction="row">
        <Flex
          w="50%"
          h="100%"
          direction="column"
          justifyContent="center"
          paddingStart="12rem"
          paddingEnd="12rem"
        >
          <Heading as="h1" size="2xl" marginBottom="2rem">
            Easy
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            Clique.Finance is the most beginner-friendly way to start investing
            in crypto currency, with a built-in fiat onramp and a simple UI.
          </Text>
          <Heading as="h1" size="2xl" marginBottom="2rem" marginTop="5rem">
            Social
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            Create your own clique with friends and family, and invest in each
            other with rotational payments.
          </Text>
        </Flex>
        <Flex
          w="50%"
          h="100%"
          direction="column"
          paddingStart="12rem"
          paddingEnd="12rem"
          justifyContent="center"
        >
          <Heading as="h1" size="2xl" marginBottom="2rem">
            Decentralized
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            Your clique's investments will earn yield on the most cutting edge
            DeFi platforms available.
          </Text>
        </Flex>
      </Flex>

      {/* Info Footer */}
      <Box className={styles.footer}>
        <Flex direction="row" marginBottom={12}>
          <a>Links</a>
          <a>to</a>
          <a>Socials</a>
        </Flex>
        <p>© 2021 Clique Finance. All Rights reserved.</p>
      </Box>
    </Flex>
  );
}
