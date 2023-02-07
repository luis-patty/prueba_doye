import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const callApi = (async) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((allpokemon) => {
        console.log(allpokemon);
        setData(allpokemon.results);
        //console.log(allpokemon.results[0].name);
        console.log("allpokemon.results", allpokemon.results);
      });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <VStack margin="50px 50px 50px 50px">
      <ChakraProvider>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </ChakraProvider>

      <List spacing={3}>
        {data.map(({ name, url }) => (
          <ListItem key={url}>
            <ListIcon as={CheckIcon} color="green.500" /> {name}
          </ListItem>
        ))}
      </List>
    </VStack>
  );
}

export default App;
