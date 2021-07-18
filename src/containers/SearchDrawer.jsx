import React, { useEffect } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { setFilteredLocations } from "../actions";
import { AiOutlineSearch } from "react-icons/ai";
import GuestInput from "../components/GuestInput";
import LocationInput from "../containers/LocationInput";

const SearchDrawer = ({ open, handleCloseDrawer, setFilteredLocations }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const handleCloseInParent = () => {
    handleCloseDrawer();
    setFilteredLocations();
  };

  return (
    <>
      <Drawer placement="top" onClose={onClose} isOpen={open} size="4xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody size="4xl">
            <Flex
              height={isLargerThan600 ? "40vh" : "80vh"}
              justifyContent="center"
              marginTop={isLargerThan600 ? "9.3rem" : "2.2rem"}
            >
              <Flex
                width="80%"
                direction={isLargerThan600 ? "row" : "column"}
                marginLeft={isLargerThan600 ? "" : "1.4rem"}
              >
                <Flex width="40%" justifyContent="center" height="100%">
                  <LocationInput />
                </Flex>

                <Flex width="40%" justifyContent="center" height="100%">
                  <GuestInput />
                </Flex>

                <Flex width="40%" justifyContent="center">
                  <Button
                    background="#EB5757"
                    onClick={handleCloseInParent}
                    height="5.5rem"
                    width="12.6rem"
                    borderRadius="1.6rem"
                  >
                    <AiOutlineSearch size="2rem" color="#fff" />
                    <Text color="#fff" fontSize="2xl" marginLeft="0.2rem">
                      Search
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const mapDispatchToProps = {
  setFilteredLocations,
};

export default connect(null, mapDispatchToProps)(SearchDrawer);
