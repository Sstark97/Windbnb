import React, { useEffect } from "react";
import { Flex, Text, Wrap, WrapItem, List, ListItem } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getPlaces } from "../actions";
import PlaceCard from "../components/PlaceCard";
import { useMediaQuery } from "@chakra-ui/react";

const Main = (props) => {
  useEffect(() => {
    props.getPlaces();
  }, []);

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      direction="column"
      width="100%"
      marginTop={isLargerThan600 ? "12rem" : "6rem"}
    >
      {console.log(props.places)}

      <Flex
        alignItems="center"
        width="80%"
        justifyContent="space-between"
        alignSelf="center"
      >
        <Text
          fontSize="1.8rem"
          fontWeight="extrabold"
          justifySelf="flex-start"
          marginRight="2rem"
        >
          {" "}
          Stays in {props.places[0].country}
        </Text>
        <Text
          justifySelf="flex-end"
          fontSize="1.4rem"
          fontWeight="light"
          color="#4F4F4F"
        >
          {" "}
          {props.places.length > 12 ? "12+ stays" : props.places.length}
        </Text>
      </Flex>

      <List
        display="flex"
        marginTop="2rem"
        width="100%"
        justifyContent="center"
        direction="row"
        flexWrap="wrap"
      >
        {props.places.map((place) => (
          <ListItem
            key={uuidv4()}
            margin={isLargerThan600 ? "3rem" : "none"}
            marginTop={isLargerThan600 ? "none" : "2rem"}
          >
            <PlaceCard
              beds={place.beds}
              photo={place.photo}
              rating={place.rating}
              superHost={place.superHost}
              title={place.title}
              type={place.type}
            />
          </ListItem>
        ))}
      </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
