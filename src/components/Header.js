import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  Container,
  Heading,
  Icon,
  useDisclosure,
  Collapse,
  Text,
} from "@chakra-ui/react";
import { ArrowSquareOut, Barbell } from "phosphor-react";
import Tap from "@/animations/tap";
import { useHotkeys } from "react-hotkeys-hook";
import Link from "next/link";

import { BodyParts } from "./BodyParts";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/18reg/open-gym",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/18reg_",
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  useHotkeys("ctrl+k", (e) => {
    e.preventDefault();
    onToggle();
  });

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top="0"
        bg={"bg.light"}
        borderBottomWidth="1px"
        w="full"
        py={6}
        zIndex={1}
        shadow="sm"
      >
        <Container maxW={{ base: "full", md: "70%" }}>
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Tap>
              <Link href="/">
                <HStack spacing={3} cursor="pointer">
                  <Heading
                    fontSize="19px"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    Open
                    <Barbell
                      size={32}
                      color="#f50"
                      weight="bold"
                      style={{
                        margin: "0 0.25rem",
                      }}
                    />
                    Gym
                  </Heading>
                </HStack>
              </Link>
            </Tap>
            <HStack display="flex" alignItems="center" spacing={2}>
              <Box display={{ base: "none", md: "inline-flex" }}>
                {links.map((link, index) => (
                  <Link key={link.title} href={link.href}>
                    <a
                      target={"_blank"}
                      style={{
                        margin: "0 1rem",
                        marginRight: index === links.length - 1 ? 0 : undefined,
                      }}
                    >
                      <Tap>
                        {link.title}
                        <Icon as={ArrowSquareOut} ml="1.5" />
                      </Tap>
                    </a>
                  </Link>
                ))}
              </Box>
              <HStack
                spacing={1}
                mr={1}
                display={{ base: "none", md: "inline-flex" }}
              ></HStack>
              <Box display={{ base: "inline-flex", md: "none" }}></Box>
            </HStack>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Box mt="3" display={{ base: "none", md: "block" }}>
              {/* <Search /> */}
            </Box>
          </Collapse>
          <Box mt="2" display={{ base: "block", md: "none" }}>
            {/* <Search /> */}
          </Box>
        </Container>
      </Box>
      <Box p="4" overflowX="hidden" overflowY="auto">
        <HStack
          justifyContent={{ base: "none", lg: "center" }}
          flexWrap={{ base: "initial", lg: "wrap" }}
          spacing={4}
          overflowX="auto"
          overflowY="hidden"
          bg={"bg.light"}
          pb="4"
          borderBottomWidth="1px"
        >
          <BodyParts />
        </HStack>
      </Box>
    </>
  );
};
