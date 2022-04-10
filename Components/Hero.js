import {
  Container,
  Center,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Box,
  Link,
  chakra,
  Img,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW={"7xl"} minH={"100vh"} mt={["16", "16", "0"]}>
      {/* <a href="https://hackclub.com/">
        <Img
          h="60px"
          w="auto"
          pos={["relative", "relative", "absolute"]}
          top="5"
          left="200px"
          src="/2022.svg"
          alt="Hack Club"
        />
      </a> */}
      <Center height={"100%"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={10}
          mt={{ base: 10, md: 0 }}
          px={{ base: 0, md: 10 }}
          minH={"600px"}
          direction={{ base: "column", md: "column", lg: "row" }}
          borderRadius={"2xl"}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as={"span"} position={"relative"} color={"white"}>
                Let's Research
              </Text>
              <br />
              <Text as={"span"} color={"purple.600"} position={"relative"}>
                Cyber Security
              </Text>
            </Heading>
            <Text color={"gray.300"} position={"relative"}>
              CyberJunk is a global initiative to promote international infosec
              research culture. The community provides free courses and
              uncountable infosec resources like roadmaps & tools.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <chakra.a
                href="https://discord.com/invite/ZmCmkw2enz"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  px={6}
                  color={"white"}
                  bg={"purple.600"}
                  _hover={{ bg: "purple.500" }}
                  _focus={{ border: "none" }}
                  _active={{ bg: "purple.600" }}
                >
                  Join community
                </Button>
              </chakra.a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              // height={'300px'}
              rounded={"2xl"}
              // boxShadow={'2xl'}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/home.webp"}
              />
            </Box>
          </Flex>
        </Stack>
      </Center>
    </Container>
  );
}

export default Hero;
