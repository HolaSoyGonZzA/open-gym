import useSWR from "swr";
import { getBodyParts } from "@/services";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { RaceBy } from "@uiball/loaders";
import Tap from "@/animations/tap";
import Link from "next/link";

export const BodyParts = () => {
  const { data, error } = useSWR(getBodyParts);
  
  const color = useColorModeValue("rgb(0,0,0, .1)", "rgb(255,255,255, .1)");

  if (error) return <div>failed to load</div>;

  if (!data) {
    return <RaceBy size={52} lineWeight={3} speed={1.4} color="#f50" />;
  }

  return (
    <>
      {data.map((category) => (
        <Tap key={category}>
          <Link href={`/body-part/${category}`}>
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
