import React, { useEffect, useMemo, useState } from "react";
import { Flex, Text, Input } from "@chakra-ui/react";
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
    <Flex>
      <Input
        placeholder="Find a Location"
        boxSizing="border-box"
        border="1px solid #333333"
        borderRadius="1.6rem"
        value={search}
        onChange={handleSearch}
      />
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
