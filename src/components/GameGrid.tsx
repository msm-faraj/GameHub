import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={5}
        padding={"10px"}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
