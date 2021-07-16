import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getPlaces } from "../actions";
import PlaceCard from "../components/PlaceCard";

const Main = (props) => {
  useEffect(() => {
    props.getPlaces();
  }, []);

  return (
    <Flex>
      {console.log(props.places)}

      <Text> Stays in {props.places[0].country}</Text>
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
