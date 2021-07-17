import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex width="100%" height="100vh" direction="column" margin="1.5rem">
      <Box
        width={isLargerThan600 ? "80%" : "100%"}
        height="20%"
        alignSelf={isLargerThan600 ? "center" : ""}
      >
        <Header />
      </Box>

      <Box width="100%" height="80%">
        <Main />
      </Box>
    </Flex>
  );
};

export default Layout;
