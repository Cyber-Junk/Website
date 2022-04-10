import { Flex } from "@chakra-ui/react";
import ProfileCard from "../Components/ProfileCard";
import TEAM from "../data/team.json";

function Team() {
  return (
    <Flex
      flexDir={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      minH={"100vh"}
      alignItems={"center"}
      w="full"
      mt={["16", "16", "0"]}
    >
      {TEAM &&
        TEAM.map((person) => {
          return (
            <ProfileCard
              key={person.id}
              name={person.name}
              designation={person.post}
              profile={person.img}
              twitter={person.twitter}
              linkedin={person.linkedin}
              github={person.github}
            />
          );
        })}
    </Flex>
  );
}

export default Team;