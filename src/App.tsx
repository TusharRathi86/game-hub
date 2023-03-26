import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"`,
        lg: `"nav   nav" 
             "aside main"`,
      }}
    >
      <GridItem area="nav">
        {" "}
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          {" "}
          ASIDE{" "}
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        {" "}
        MAIN{" "}
      </GridItem>
    </Grid>
  );
}
export default App;