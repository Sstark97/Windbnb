import "../assets/styles/App.css";
import Layout from "../containers/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;
