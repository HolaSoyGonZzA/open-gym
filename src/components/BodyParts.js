import { Box, useColorModeValue } from "@chakra-ui/react";
import Tap from "@/animations/tap";
import Link from "next/link";

const data = [
  "upper arms",
  "upper legs",
  "back",
  "waist",
  "chest",
  "shoulders",
  "lower legs",
  "lower arms",
  "cardio",
  "neck",
];

export const BodyParts = () => {
  const color = useColorModeValue("rgb(0,0,0, .1)", "rgb(255,255,255, .1)");

  return (
    <>
      <Tap>
        <Link href={'/'}>
          <a>
            <Box
              p={4}
              borderRadius="4px"
              borderWidth="1px"
              _hover={{
                border: `1px solid ${color}`,
                transform: "scale(0.98)",
              }}
            >
              All
            </Box>
          </a>
        </Link>
      </Tap>
      {data.map((category) => (
        <Tap key={category}>
          <Link href={`/?body-part=${category}`}>
            <a>
              <Box
                p={4}
                borderRadius="4px"
                borderWidth="1px"
                _hover={{
                  border: `1px solid ${color}`,
                  transform: "scale(0.98)",
                }}
              >
                {category}
              </Box>
            </a>
          </Link>
        </Tap>
      ))}
    </>
  );
};
