import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatfrom?.name || "Platfroms"}
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem
            onClick={() => onSelectPlatform(platfrom)}
            key={platfrom.id}
          >
            {platfrom.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
