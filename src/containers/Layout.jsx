import React from 'react';
import { Flex, Box} from "@chakra-ui/react";
import Header from './Header';
import Main from './Main';

const Layout = () => (
    <Flex width="100%" height="100vh" direction="column">

        <Box width="100%" height="20%">
            <Header />
        </Box>

        <Box width="100%" height="80%">
            <Main />
        </Box>

    </Flex>
);

export default Layout;