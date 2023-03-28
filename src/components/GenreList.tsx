import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImage(gen.image_background)}
            />
            <Button
              fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"2sm"}
              variant="link"
              onClick={() => onSelectGenre(gen)}
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

/* 
      OLD CODE:

import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
 */
