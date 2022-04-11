import { Flex, Box, Img, Heading } from "@chakra-ui/react";
import Sponsor from "../Components/Sponsor";
import SPONSORS from "../data/sponsor.json";
import PARTNERS from "../data/partners.json";

function Sponsors() {
  return (
    <Flex
      flexDir={"column"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      w="full"
      mt={["16", "16", "0"]}
    >
      <Heading my="10" zIndex={1}>
        Sponsors
      </Heading>
      <Flex
        w="full"
        flexDir={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        my={10}
      >
        {SPONSORS.map((sponsor) => (
          <Sponsor name={sponsor.name} link={sponsor.link} />
        ))}
      </Flex>
      <Heading my="10" zIndex={1}>
        Community Partners
      </Heading>
      <Flex
        w="full"
        flexDir={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        my={10}
      >
        {PARTNERS.map((partner) => (
          <Sponsor name={partner.name} link={partner.link} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Sponsors;
