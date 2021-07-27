import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { setFilteredLocations } from "../actions";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import GuestInput from "../components/GuestInput";
import LocationInput from "../containers/LocationInput";

const SearchDrawer = ({ open, handleCloseDrawer, setFilteredLocations }) => {
  const { onClose } = useDisclosure();

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
              width="100%"
              justifyContent="flex-end"
              height="1.3rem"
              padding="2rem"
              cursor="pointer"
              marginLeft="3rem"
            >
              <AiOutlineClose size="2.3rem" onClick={handleCloseInParent} />
            </Flex>
            <Flex
              width="100%"
              direction={isLargerThan600 ? "row" : "column"}
              marginLeft={isLargerThan600 ? "5.4rem" : "1.4rem"}
              height={isLargerThan600 ? "40vh" : "80vh"}
              className="Pepe"
              justifyContent="space-between"
              marginTop={isLargerThan600 ? "9.3rem" : "2.2rem"}
            >
              <Flex
                width={isLargerThan600 ? "40%" : "100%"}
                justifyContent="center"
                // height="100%"
                justifySelf="center"
              >
                <LocationInput />
              </Flex>

              <Flex
                width={isLargerThan600 ? "40%" : "100%"}
                justifyContent="center"
                height="100%"
              >
                <GuestInput />
              </Flex>

              <Flex
                width={isLargerThan600 ? "40%" : "100%"}
                justifyContent="center"
                alignSelf={isLargerThan600 ? "" : "center"}
              >
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
