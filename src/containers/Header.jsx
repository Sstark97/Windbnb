import React from "react";
import { Flex, Image, Select, Button } from "@chakra-ui/react";
import logo from "../assets/static/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Flex direction="column">
      <Flex width="10rem"><Image src={logo} /></Flex>

      <Flex>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Button>
          <AiOutlineSearch size="3em" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
