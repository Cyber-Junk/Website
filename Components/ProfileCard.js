import {
  Box,
  Stack,
  Avatar,
  Heading,
  Icon,
  Text,
  chakra,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function ProfileCard({
  name,
  designation,
  profile,
  twitter,
  linkedin,
  github,
}) {
  return (
    <Box
      border={"white"}
      minW={"270px"}
      boxShadow={"2xl"}
      rounded={"xl"}
      maxH={"300px"}
      m={10}
      backdropFilter="blur(5px)"
    >
      <Stack justifyContent={"center"} direction={"row"} p={6}>
        <Avatar size="2xl" src={`/team/${profile}`} />
      </Stack>
      <Stack spacing={0} align={"center"} mx={6}>
        <Heading fontSize={"xl"} textTransform={"capitalize"}>
          {name}
        </Heading>
        <Text color={"gray.300"} textTransform={"capitalize"}>
          {designation}
        </Text>
        z
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        m={6}
        px={6}
        color={"white"}
      >
        <chakra.a href={linkedin} target="_blank">
          <Icon as={FaLinkedin} w={6} h={6} cursor={"pointer"} />
        </chakra.a>
        <chakra.a href={twitter} target="_blank">
          <Icon as={FaTwitter} w={6} h={6} cursor={"pointer"} />
        </chakra.a>
        <chakra.a href={github} target="_blank">
          <Icon as={FaGithub} w={6} h={6} cursor={"pointer"} />
        </chakra.a>
      </Stack>
    </Box>
  );
}

export default ProfileCard;
