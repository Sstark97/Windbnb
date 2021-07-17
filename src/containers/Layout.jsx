import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex width="100%" height="100%" direction="column" margin="1.5rem">
      <Box
        width={isLargerThan600 ? "80%" : "100%"}
        height="20%"
        alignSelf={isLargerThan600 ? "center" : ""}
      >
        <Header />
      </Box>

      <Box width="100%" height="60%">
        <Main />
      </Box>

      <Flex
        width="100%"
        height="20%"
        justifyContent="center"
        alignItems="center"
        display={!isLargerThan600 ? "none" : "flex"}
      >
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
