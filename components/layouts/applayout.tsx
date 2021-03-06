import { Container, Flex, useColorModeValue, VStack } from '@chakra-ui/react';
import ThemeButton from '../ThemeButton';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const containerBgColor = useColorModeValue('gray.300', 'gray.700');
  return (
    <Container
      as={'main'}
      maxWidth={'container.xl'}
      bgColor={containerBgColor}
      mt={5}
      h={'90vh'}
      padding={4}
      borderRadius={15}
    >
      {children}
    </Container>
  );
}
