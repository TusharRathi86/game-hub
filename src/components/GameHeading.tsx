import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {" "}
      {heading}
    </Heading>
  );
};

export default GameHeading;

/* 

const { data: genres } = useGenres();
const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

const { data: platforms } = usePlatforms();
const platform = platforms?.results.find(
  (p) => p.id === gameQuery.platformId
);

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {" "}
      {heading}
    </Heading>
  );
};

export default GameHeading;

*/
