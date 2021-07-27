import React, { useState } from "react";
import { Flex, Input, Text, useMediaQuery } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getLocation } from "../actions";
import NumberInput from "./NumberInput";
const GuestInput = (props) => {
  const [focus, setFocus] = useState(false);
  const [guest, setGuest] = useState(0);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const handleSetFocusInput = () => {
    setFocus(!focus);
    props.getLocation();
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
        width={isLargerThan600 ? "" : "98%"}
        readOnly
        onFocus={handleSetFocusInput}
        value={guest !== 0 ? `${guest} guests` : ""}
      />

      <Flex
        direction="column"
        display={focus ? "flex" : "none"}
        fontSize="3xl"
        marginTop="4.2rem"
        marginLeft="2.2rem"
        alignItems={isLargerThan600 ? "" : "center"}
      >
        <Text fontWeight="extrabold">Guests</Text>
        <NumberInput
          handleGuestChange={handleGuestChange}
          maxValue={Number(props.location.maxGuests)}
        ></NumberInput>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    // guests: state.guests,
  };
};

const mapDispatchToProps = {
  getLocation,
  //   setGuests,
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestInput);
