import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  Img,
  Button,
  chakra,
} from "@chakra-ui/react";

export default function Event({ type, name, description, link, img }) {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      maxW={"350px"}
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
      m={5}
      backdropFilter="blur(5px)"
    >
      <Stack
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        pos={"relative"}
        justifyContent={'center'}
      >
        <Img src={img} objectFit={"contain"} />
      </Stack>
      <Stack minH={"200px"}>
        <Badge
          color={"#682ae9"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
          bg={"white"}
          mr={"auto"}
          px={2}
          py={1}
          rounded={"md"}
        >
          {type}
        </Badge>
        <Heading
          color={"white"}
          fontSize={"2xl"}
          fontFamily={"body"}
          textTransform={"capitalize"}
        >
          {name}
        </Heading>
        <Text color={"gray.300"}>{description}</Text>
      </Stack>
      <Stack mt={"6"} direction={"row"} spacing={4} align={"center"}>
        <chakra.a href={link} target="_blank">
          <Button
            variant="solid"
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.500",
            }}
            _focus={{
              border: "none",
            }}
            _active={{
              bg: "purple.600",
            }}
          >
            Register
          </Button>
        </chakra.a>
      </Stack>
    </Flex>
  );
}
