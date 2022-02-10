import { Flex } from '@chakra-ui/react';
import ProfileCard from './Profilecard';
import db from '../../Firebase/database';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

function Team() {

    const [team, setTeam] = useState("");

    async function getTeam() {
        const teamcol = collection(db, 'team');
        const teamsnapshot = await getDocs(teamcol);
        const teamList = teamsnapshot.docs.map(doc => doc.data());
        setTeam(teamList);
    }

    useEffect(() => {
        getTeam();
    }, []);

    return (
        <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
            {team && team.map((person) => {
                console.log(person.profile);
                return (
                    <ProfileCard name={person.name} designation={person.designation} profile={person.profile}/>
                )
            })}
        </Flex>
    );
}

export default Team;
