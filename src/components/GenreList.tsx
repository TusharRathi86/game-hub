import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
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
