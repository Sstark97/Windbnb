import React from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import logo from "../assets/static/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Flex direction="column">
      <Flex width="10rem">
        <Image src={logo} />
      </Flex>

      <Flex
        width="29.7rem"
        height="5.5rem"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        borderRadius="1rem"
        border="1px solid #F2F2F2"
        marginTop="3.9rem"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          width="13.8rem"
          height="100%"
          borderRight="1px solid #F2F2F2"
        >
          <Text fontSize="2xl"> Helsinki, Finland </Text>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          width="10.6rem"
          height="100%"
          borderRight="1px solid #F2F2F2"
        >
          <Text fontSize="2xl" color="#BDBDBD"> Add guests </Text>
        </Flex>

        <Flex
          width="5.3rem"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <AiOutlineSearch size="1.7rem" color="#EB5757E5"/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
