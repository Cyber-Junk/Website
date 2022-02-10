import { Flex } from "@chakra-ui/react";
import Event from "./Event";
import db from '../../Firebase/database';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

function Events() {

    const [events, setEvents] = useState("");

    async function getevents() {
        const eventcol = collection(db, 'events');
        const eventsnapshot = await getDocs(eventcol);
        const eventList = eventsnapshot.docs.map(doc => doc.data());
        setEvents(eventList);
    }

    useEffect(() => {
        getevents();
    }, []);

    return (
        <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} my={10}>
            {events && events.map((event) => {
                return (
                    <Event type={event.type} name={event.name} description={event.description} />
                )
            })}
        </Flex>
    );
}

export default Events;
