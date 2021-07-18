import React, { useEffect, useMemo, useState } from "react";
import { Flex, List, ListItem, Input, Text } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getPlaces } from "../actions";

const LocationInput = (props) => {
  useEffect(() => {
    props.getPlaces();
    const places = props.places.map((place, index) => {
      return {
        id: index,
        place: `${place.city}, ${place.country}`,
      };
    });
    setPlaces(places);
    console.log(places);
  }, []);

  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);

  const filteredLocation = useMemo(() => {
    console.log(places);

    if (search === "" || focus === false) {
      return [];
    }

    return places.filter(
      (place) =>
        place.place.toLowerCase().includes(search.toLowerCase()) ||
        place.place.toLowerCase().includes(search.toLowerCase())
    );
  }, [places, search]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value.length >= 0) {
      setSearch(event.target.value);
    }
  };

  const handleSetPlace = (id) => {
    const place = places[id];
    setSearch(place.place);
  };

  const handleResetFilteredLocations = () => {
    setFocus(false);
  };

  const handleAbleInput = () => {
    setFocus(true);
  };

  return (
    <Flex direction="column" width="100%" height="100%">
      <Input
        placeholder="Add a Location"
        height="5.5rem"
        minHeight="5.5rem"
        fontSize="2xl"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
        boxShadow="0px 1px 6px rgba(0, 0, 0, 0.1)"
        value={search}
        onChange={handleSearch}
        onBlur={handleResetFilteredLocations}
        onFocus={handleAbleInput}
      />

      {filteredLocation.length > 0 ? (
        <List marginTop="1.5rem" overflow="hidden">
          {filteredLocation.map((place) => (
            <ListItem
              key={uuidv4()}
              display="flex"
              alignItems="center"
              marginTop="4.2rem"
            >
              <HiLocationMarker />
              <Text
                fontSize="3xl"
                marginLeft="0.2rem"
                onClick={() => {
                  handleSetPlace(place.id);
                }}
              >
                {place.place}
              </Text>
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
