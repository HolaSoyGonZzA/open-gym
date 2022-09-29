
import { Center, Text, VStack } from "@chakra-ui/react";
import { LeapFrog } from "@uiball/loaders";

export  const Loading = (props) => {
  return (
    <Center>
      <VStack spacing={3} mt="3">
        <LeapFrog size={32} speed={2.5} color="#f50" />
        <Text>{props.text}</Text>
      </VStack>
    </Center>
  );
};