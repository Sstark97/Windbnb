import React, { useEffect, useMemo, useState } from "react";
import { Flex, List, ListItem, Input, Text } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getPlaces } from "../actions";

const LocationInput = (props) => {
  useEffect(() => {
    props.getPlaces();
    const places = props.places.map(
      (place) => `${place.city}, ${place.country}`
    );
    setPlaces(places);
    console.log(places);
  }, []);

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");

  const filteredLocation = useMemo(() => {
    console.log(places);

    if (search === "") {
      return [];
    }

    return places.filter(
      (place) =>
        place.toLowerCase().includes(search.toLowerCase()) ||
        place.toLowerCase().includes(search.toLowerCase())
    );
  }, [places, search]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value.length >= 0) {
      setSearch(event.target.value);
    }
  };

  return (
    <Flex direction="column" width="100%" height="100%">
      <Input
        placeholder="Add a Location"
        height="5.5rem"
        fontSize="2xl"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        value={search}
        onChange={handleSearch}
      />

      {filteredLocation.length > 0 ? (
        <List>
          {filteredLocation.map((place) => (
            <ListItem key={uuidv4()}>
              <HiLocationMarker />
              <Text>{place}</Text>
            </ListItem>
          ))}
        </List>
      ) : (
        <></>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput);
