import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  Flex,
  Input,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { getPlaces, getLocation } from "../actions";
import NumberInput from "./NumberInput";
const GuestInput = (props) => {
  const [focus, setFocus] = useState(false);
  const [maxGuest, setMaxGuest] = useState(0);
  const [guest, setGuest] = useState(0);
  const btnRef = useRef();

  const handleSetFocusInput = () => {
    setFocus(!focus);
    props.getLocation();
    setMaxGuest(Number(props.location.maxGuests));
  };

  const handleGuestChange = (value) => {
    setGuest(Number(value));
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
        onChange={handleGuestChange}
        value={guest !== 0 ? `${guest} guests` : ""}
      />

      <Flex
        direction="column"
        display={focus ? "flex" : "none"}
        fontSize="3xl"
        marginTop="4.2rem"
        marginLeft="2.2rem"
      >
        <Text fontWeight="extrabold">Guests</Text>
        <NumberInput
          handleGuestChange={handleGuestChange}
          maxValue={maxGuest}
        ></NumberInput>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
    location: state.location,
  };
};

const mapDispatchToProps = {
  getPlaces,
  getLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestInput);
