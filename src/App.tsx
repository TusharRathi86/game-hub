import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platfrom: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"`,
        lg: `"nav   nav" 
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"5px"}>
          {" "}
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatfrom={gameQuery.platfrom}
          onSelectPlatform={(platfrom) =>
            setGameQuery({ ...gameQuery, platfrom })
          }
        />
        <GameGrid gameQuery={gameQuery} />{" "}
      </GridItem>
    </Grid>
  );
}
export default App;

/* 
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
*/
