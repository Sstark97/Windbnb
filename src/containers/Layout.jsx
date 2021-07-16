import React from 'react';
import { Flex, Box} from "@chakra-ui/react";
import Header from './Header';

const Layout = () => (
    <Flex width="100%" height="100vh">

        <Box width="100%" height="20%">
            <Header />
        </Box>

    </Flex>
);

export default Layout;