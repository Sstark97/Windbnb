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
  <Flex width="35rem" height="31.3rem">
    <Box width="100%" height="23.8rem" borderRadius="2.4rem">
      <Image src={photo} alt="Place Photo" />
    </Box>

    <Flex width="23.2rem" height="2.4rem">
      {superHost ? (
        <Flex width="8.8rem" height="100%">
          <Text borderRadius="1.2rem" border="1px solid #4F4F4F">
            SUPER HOST
          </Text>
        </Flex>
      ) : (
        <></>
      )}

      <Box width="16rem">
        <Text>
          {type} {beds} beds
        </Text>
      </Box>

      <Box justifySelf="flex-end">
        <AiFillStar size="1.4rem" color="#EB5757E5" />
        <Text>{rating}</Text>
      </Box>
    </Flex>

    <Text fontWeight="extrabold">{title}</Text>
  </Flex>
);

export default PlaceCard;
