import {
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const btnIcon = useColorModeValue(<FiMoon />, <FiSun />);
  const btnBgColor = useColorModeValue('purple.500', 'yellow.500');
  const btnColor = useColorModeValue('white', 'black');
  return (
    <IconButton
      aria-label='Switch Theme'
      bgColor={btnBgColor}
      color={btnColor}
      icon={btnIcon}
      onClick={toggleColorMode}
    ></IconButton>
  );
};

export default ThemeButton;
