import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailpage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // Telling the typescipt compiler that this constant will never be null.

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading> {game.name} </Heading>
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailpage;
