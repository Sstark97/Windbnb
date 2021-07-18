import React, { useRef } from "react";
import { useNumberInput, Input, Button, HStack } from "@chakra-ui/react";
import { connect } from "react-redux";
import { setGuests } from "../actions";

const NumberInput = ({ maxValue, handleGuestChange, setGuests }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: maxValue,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  const inputRef = useRef();

  const handleGuestChangeInSon = () => {
    const value = inputRef?.current?.value;
    handleGuestChange(value);
    setGuests(value);
  };

  return (
    <HStack maxW="320px" width="50%">
      <Button {...inc} border="1px solid #828282" background="#fff">
        +
      </Button>
      <Input
        {...input}
        textAlign="center"
        minWidth="3.39rem"
        width="4.4rem"
        border="none"
        ref={inputRef}
        onChange={handleGuestChangeInSon()}
      />
      <Button {...dec} border="1px solid #828282" background="#fff">
        -
      </Button>
    </HStack>
  );
};

const mapDispatchToProps = {
  setGuests,
};

export default connect(null, mapDispatchToProps)(NumberInput);
