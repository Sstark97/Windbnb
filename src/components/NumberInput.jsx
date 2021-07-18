import React, { useRef } from "react";
import { useNumberInput, Input, Button, HStack } from "@chakra-ui/react";

const NumberInput = ({ maxValue, handleGuestChange }) => {
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
  };

  return (
    <HStack maxW="320px" width="50%">
      <Button
        {...inc}
        border="1px solid #828282"
        background="#fff"
        isDisabled={inputRef?.current?.value === maxValue}
      >
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

export default NumberInput;
