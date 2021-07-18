import React, { useEffect, useMemo, useState } from "react";
import {
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { getPlaces } from "../actions";

const GuestInput = (props) => {
  const [focus, setFocus] = useState(false);

  const handleSetFocusInput = () => {
    setFocus(!focus);
  };

  const handleSetBlurInput = () => {
    setFocus(false);
  };
  return (
    <Flex direction="column" width="100%" height="100%">
      <Input
        placeholder="Add guests"
        fontSize="3xl"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        height="5.5rem"
        readOnly
        onFocus={handleSetFocusInput}
      />

      <Flex
        direction="column"
        display={focus ? "flex" : "none"}
        fontSize="3xl"
        marginTop="4.2rem"
      >
        <Text fontWeight="extrabold">Adults</Text>
        <Text color="#BDBDBD">Ages 13 or above</Text>
        <NumberInput
          size="md"
          maxW={40}
          defaultValue={0}
          min={0}
          height="2.2rem"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex
        direction="column"
        display={focus ? "flex" : "none"}
        fontSize="3xl"
        marginTop="4.2rem"
      >
        <Text fontWeight="extrabold">Children</Text>
        <Text color="#BDBDBD">Ages 2-12</Text>
        <NumberInput
          size="md"
          maxW={40}
          defaultValue={0}
          min={0}
          height="2.2rem"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

const mapDispatchToProps = {
  getPlaces,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestInput);
