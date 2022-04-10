import { Flex } from "@chakra-ui/react";
import Event from "../Components/Event";
import EVENTS from "../data/event.json";

function Events() {
  return (
    <Flex
      flexDir={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      w="100vw"
      minH="100vh"
      alignItems={"center"}
      mt={["16", "16", "0"]}
    >
      {EVENTS &&
        EVENTS.map((event) => {
          return (
            <Event
              key={event.id}
              type={event.type}
              name={event.name}
              description={event.desc}
              link={event.link}
              img={event.img}
            />
          );
        })}
    </Flex>
  );
}

export default Events;
