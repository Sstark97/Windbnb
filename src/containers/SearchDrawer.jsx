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
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { setFilteredLocations } from "../actions";
import { AiOutlineSearch } from "react-icons/ai";
import GuestInput from "../components/GuestInput";
import LocationInput from "../containers/LocationInput";

const SearchDrawer = ({ open, handleCloseDrawer, setFilteredLocations }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Flex height="40vh" justifyContent="center" marginTop="9.3rem">
              <Flex width="80%">
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
