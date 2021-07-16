import React, { useEffect } from "react";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getPlaces } from "../actions";
import PlaceCard from "../components/PlaceCard";

const Main = (props) => {
  useEffect(() => {
    props.getPlaces();
  }, []);

  return (
    <Flex direction="column" width="100%">
      {console.log(props.places)}

      <Flex alignItems="center" width="100%" justifyContent="space-between">
        <Text fontSize="1.8rem" fontWeight="extrabold" justifySelf="flex-start">
          {" "}
          Stays in {props.places[0].country}
        </Text>
        <Text justifySelf="flex-end" fontSize="1.4rem" fontWeight="light">
          {" "}
          {props.places.length > 12 ? "12+" : props.places.length}
        </Text>
      </Flex>

      <Wrap marginTop="2rem" maxWidth="33rem">
        {props.places.map((place) => (
          <WrapItem key={uuidv4()} maxWidth="33rem">
            <PlaceCard
              beds={place.beds}
              photo={place.photo}
              rating={place.rating}
              superHost={place.superHost}
              title={place.title}
              type={place.type}
            />
          </WrapItem>
        ))}
      </Wrap>
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
