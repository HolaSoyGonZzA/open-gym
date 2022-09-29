import Image from "next/image";
import Link from "next/link";
import Tap from "@/animations/tap";

import { Box, Text } from "@chakra-ui/react";

export const ExerciseCard = ({ id, title, image }) => {
  return (
    <Tap>
      <Link href="/" passHref>
        <a>
          <Box
            borderRadius="10px"
            borderWidth="1px"
            borderColor={"transparent"}
            mb="2"
            _hover={{
              border: "1px solid transparent",
              transform: "scale(1.03)",
            }}
          >
            <Image src={image} alt={title} width={100} height={100} />
            <Text my="3" fontWeight="light" textAlign="center">
              {title}
            </Text>
          </Box>
        </a>
      </Link>
    </Tap>
  );
};
