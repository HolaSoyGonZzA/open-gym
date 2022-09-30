import Image from "next/image";
import Tap from "@/animations/tap";

import {
  Box,
  Center,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import useMediaQuery from "@/hooks/useMediaQuery";

export const ExerciseCard = ({ title, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const matches = useMediaQuery("(min-width: 720px)");

  return (
    <>
      <Tap>
        <Box
          onClick={onOpen}
          padding={"0.25rem"}
          borderRadius="10px"
          borderWidth="1px"
          borderColor={"transparent"}
          backgroundColor={"#fff"}
          mb="2"
          _hover={{
            border: "1px solid transparent",
            transform: "scale(1.03)",
            cursor: "pointer",
          }}
        >
          <Center>
            <Image src={image} alt={title} width={100} height={100} />
          </Center>
          <Text my="3" fontWeight="light" textAlign="center">
            {title}
          </Text>
        </Box>
      </Tap>
      {matches ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Image src={image} width={300} height={300} alt={title} />
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
            <DrawerBody>
              <Center>
                <Image src={image} width={300} height={300} alt={title} />
              </Center>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};
