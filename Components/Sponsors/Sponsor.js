import { Box, Img } from "@chakra-ui/react";

function Sponsor() {
  return (
      <Box maxW={150} m={5} rounded={'2xl'} shadow={'xl'} p={5} style={{backdropFilter: "blur(10px)"}}>
          <Img src="https://cyberjunk.co/static/media/2.579c3639.webp" alt="" rounded={'2xl'}/>
      </Box>
  );
}

export default Sponsor;