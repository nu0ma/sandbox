import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';

export const MenuInput = () => {
  const handleSubmit = () => {};
  return (
    <form>
      <Flex justifyContent="center" flexDirection="column" maxW="lg">
        <FormLabel>種目</FormLabel>
        <Input></Input>
        <FormLabel>重量</FormLabel>
        <Input></Input>
        <FormLabel>レップ数</FormLabel>
        <Input></Input>
        <Button onSubmit={handleSubmit} mt="8" colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
