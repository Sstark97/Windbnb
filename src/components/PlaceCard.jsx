import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const PlaceCard = ({
  beds,
  city,
  country,
  maxGuests,
  photo,
  rating,
  superHost,
  title,
  type,
}) => (
  <Flex width="33rem" height="31.3rem" direction="column">
    <Box width="33rem" maxHeight="23.8rem" borderRadius="2.4rem">
      <Image
        src={photo}
        alt="Place Photo"
        width="33rem"
        height="23.8rem"
        borderRadius="2.4rem"
      />
    </Box>

    <Flex
      width="33rem"
      height="2.4rem"
      justifyContent="space-evenly"
      marginTop="1rem"
    >
      {superHost ? (
        <Flex width="8.8rem" height="100%" alignItems="center">
          <Text
            borderRadius="1.2rem"
            border="1px solid #4F4F4F"
            textAlign="center"
            padding="0.3rem"
          >
            SUPER HOST
          </Text>
        </Flex>
      ) : (
        <></>
      )}

      <Box width="16rem">
        <Text fontSize="1.2rem">
          {type} {beds} beds
        </Text>
      </Box>

      <Flex justifySelf="flex-end">
        <AiFillStar size="1.4rem" color="#EB5757E5" />
        <Text fontSize="1.2rem">{rating}</Text>
      </Flex>
    </Flex>

    <Text fontWeight="extrabold" fontSize="2xl" marginLeft="1rem">
      {title}
    </Text>
  </Flex>
);

export default PlaceCard;
