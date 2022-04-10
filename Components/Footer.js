import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  Heading,
  Img,
} from "@chakra-ui/react";
import { FaYoutube, FaTwitch, FaDiscord } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const MotionImg = motion(Img);

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      w={"100%"}
      color={"white"}
      mt={10}
      style={{ backdropFilter: "blur(10px)" }}
      boxShadow={"2xl"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            sm: "1fr 1fr",
            lg: "2fr 1fr 2fr 2fr",
            md: "1fr 1fr",
          }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading color={"white"}>CyberJunk</Heading>
            </Box>
            <Text fontSize={"sm"}>© 2020 CyberJunk All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <Link href="https://discord.com/invite/ZmCmkw2enz" target="_blank">
                <IconButton
                  aria-label="Discord"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _focus={{ border: "none" }}
                  _hover={{ bg: "purple.600" }}
                  _active={{ bg: "purple.500" }}
                  icon={<FaDiscord size="28px" />}
                />
              </Link>
              <Link href="" target="_blank">
                <IconButton
                  aria-label="Twitch"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _focus={{ border: "none" }}
                  _hover={{ bg: "purple.600" }}
                  _active={{ bg: "purple.500" }}
                  icon={<FaTwitch size="28px" />}
                />
              </Link>
              <Link href="" target="_blank">
                <IconButton
                  aria-label="Youtube"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _focus={{ border: "none" }}
                  _hover={{ bg: "purple.600" }}
                  _active={{ bg: "purple.500" }}
                  icon={<FaYoutube size="28px" />}
                />
              </Link>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={"whiteAlpha.300"}
                border={0}
                _focus={{
                  bg: "whiteAlpha.400",
                }}
              />
              <IconButton
                bg={"purple.600"}
                color={"white"}
                _hover={{
                  bg: "purple.500",
                }}
                _focus={{
                  border: "none",
                }}
                _active={{
                  bg: "purple.600",
                }}
                aria-label="Subscribe"
                icon={<BiSend size={"20px"} />}
              />
            </Stack>
          </Stack>
          <Stack flexDir={"row"}>
            <AnimatePresence>
              <MotionImg
                src="/footer.webp"
                w={"300px"}
                key="footer"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring", bounce: 0.4 }}
                exit={{ y: 40, opacity: 0 }}
              />
            </AnimatePresence>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
