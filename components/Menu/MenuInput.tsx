import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

type FormInputs = {
  menu: string;
  weight: string;
  rep: string;
};

export const MenuInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const toast = useToast();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    toast({
      title: '追加',
      status: 'success',
      duration: 900,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex justifyContent="center" flexDirection="column" maxW="lg">
        <FormControl isInvalid={errors.menu ? true : false}>
          <FormLabel>種目</FormLabel>
          <Input
            autoComplete="off"
            {...register('menu', {
              required: '種目は必須です',
            })}
          ></Input>
          <FormErrorMessage role="alert">
            {errors.menu && errors.menu.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.weight ? true : false}>
          <FormLabel>重量</FormLabel>
          <Input
            type="number"
            {...register('weight', {
              required: '重量を入力してください',
            })}
          ></Input>
          <FormErrorMessage role="alert">
            {errors.weight && errors.weight.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.rep ? true : false}>
          <FormLabel>レップ数</FormLabel>
          <Input
            type="number"
            {...register('rep', {
              required: 'レップ数を入力してください',
            })}
          ></Input>
        </FormControl>

        <Button type="submit" mt="8" colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
