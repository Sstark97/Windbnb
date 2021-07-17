import React, { useEffect, useMemo, useState } from "react";
import { Flex, List, ListItem, Input, Text } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getPlaces } from "../actions";

const LocationInput = (props) => {
  useEffect(() => {
    props.getPlaces();
    const places = props.places((place) => `${place.city}, ${place.country}`);
    setPlaces(places);
  }, []);

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");

  const filteredLocation = useMemo(() => {
    return places.filter(
      (place) =>
        place.city.toLowerCase().includes(search.toLowerCase()) ||
        place.country.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value.length > 0) {
      setSearch(event.target.value);
    }
  };

  return (
    <Flex direction="column" width="100%" height="100%">
      <Input
        placeholder="Find a Location"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
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
