import { Box, Heading, Img, Link } from "@chakra-ui/react";

function Sponsor({ name, link }) {
  return (
    <Box
      maxW={150}
      m={5}
      rounded={"2xl"}
      shadow={"xl"}
      p={5}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Link href={link} target="_blank">
        <Img src={`/sponsors/${name}.webp`} alt={name} rounded={"2xl"} />
      </Link>
    </Box>
  );
}

export default Sponsor;