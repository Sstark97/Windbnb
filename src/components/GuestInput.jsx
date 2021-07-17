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
  return (
    <Flex direction="column" width="100%" height="100%">
      <Input
        placeholder="Add guests"
        fontSize="2xl"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        height="5.5rem"
        readOnly
      />

      <Flex direction="column">
        <Text fontWeight="extrabold">Adults</Text>
        <Text>Ages 13 or above</Text>
        <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>

      <Flex direction="column">
        <Text fontWeight="extrabold">Children</Text>
        <Text>Ages 2-12</Text>
        <NumberInput size="sm" maxW={20} defaultValue={15} min={10}>
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
