import { Button, Text, useColorModeValue } from '@chakra-ui/react';

type Props = {
  name: string;
};

const ContactCard = ({ name }: Props) => {
  const cardHoverStyle = {
    bgColor: 'blue.200',
  };
  return (
    <Button
      flexDirection={'column'}
      bgColor={useColorModeValue('blue.100', 'blue.700')}
      padding={'0.25rem 1rem'}
      borderRadius={5}
      w={'100%'}
      _hover={cardHoverStyle}
      _focus={cardHoverStyle}
    >
      <Text color={useColorModeValue('black', 'white')} fontWeight={'bold'}>
        {name}
      </Text>
    </Button>
  );
};

export default ContactCard;
