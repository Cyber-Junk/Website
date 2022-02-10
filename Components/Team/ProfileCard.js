import {
    Box,
    Stack,
    Avatar,
    Heading,
    Icon,
    Text,
} from '@chakra-ui/react';
import {
    FaGithub,
    FaLinkedin,
    FaLink
} from 'react-icons/fa';

function ProfileCard({ name, designation, profile}) {
    return (
        <Box border={'white'} minW={'270px'} boxShadow={'2xl'} rounded={'xl'} maxH={'300px'} m={10} style={{ backdropFilter: "blur(10px)" }}>
            <Stack justifyContent={'center'} direction={'row'} p={6}>
                <Avatar size="2xl" src={profile} />
            </Stack>
            <Stack spacing={0} align={'center'} mx={6}>
                <Heading fontSize={'2xl'} fontWeight={500} textTransform={'capitalize'}>
                    {name}
                </Heading>
                <Text color={'gray.300'} textTransform={'capitalize'}>{designation}</Text>z
            </Stack>
            <Stack direction={'row'} justifyContent={'space-around'} m={6} px={6} color={'white'}>
                <Icon as={FaGithub} w={6} h={6} cursor={'pointer'} />
                <Icon as={FaLinkedin} w={6} h={6} cursor={'pointer'} />
                <Icon as={FaLink} w={6} h={6} cursor={'pointer'} />
            </Stack>
        </Box>
    );
}

export default ProfileCard;