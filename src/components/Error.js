import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowClockwise, ArrowSquareOut, Warning } from "phosphor-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Error = (props) => {
  const router = useRouter();

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <Center>
      <VStack>
        <Warning size={90} />
        <Heading fontSize="3xl">{props.title}</Heading>
        <Text>{props.description}</Text>
        <HStack>
          <Button
            variant="ghost"
            borderWidth="1px"
            leftIcon={<ArrowClockwise />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
          <Link href="https://github.com/18reg/open-gym/issues/new">
            <Button variant="ghost" rightIcon={<ArrowSquareOut />}>
              Create issue
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Center>
  );
};