import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function App() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      {/* Nav Header (sticky) */}
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="8rem"
        position="fixed"
        top={0}
        paddingStart="4rem"
      >
        <Heading as="h1" size="2xl">
          Clique.Finance
        </Heading>
      </Flex>
      <Flex w="100%" h="8rem"></Flex>

      {/* Body */}
      <p>todo: build App UI. </p>
    </Flex>
  );
}
