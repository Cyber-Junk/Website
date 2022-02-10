import { Flex } from '@chakra-ui/react';
import Sponsor from './Sponsor';

function Sponsors() {
  return (
      <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} my={20}>
          <Sponsor/>
          <Sponsor/>
          <Sponsor/>
          <Sponsor/>
          <Sponsor/>
      </Flex>
  );
}

export default Sponsors;