import {
    Box,
    Stack,
    Avatar,
    Heading,
    Icon,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import {
    FaGithub,
    FaLinkedin,
    FaLink
} from 'react-icons/fa';

function Card() {
    return (
        <Box border={'white'} minW={'270px'} boxShadow={'2xl'} rounded={'xl'} maxH={'300px'} m={5} style={{ backdropFilter: "blur(10px)" }}>
            <Stack justifyContent={'center'} direction={'row'} p={6}>
                <Avatar size="2xl" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" />
            </Stack>
            <Stack spacing={0} align={'center'} mx={6}>
                <Heading fontSize={'2xl'} fontWeight={500}>
                    Harsh Sachaniya
                </Heading>
                <Text color={'gray.300'}>Web Developer</Text>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-around'} m={6} px={6} color={'white'}>
                <Icon as={FaGithub} w={6} h={6} cursor={'pointer'} />
                <Icon as={FaLinkedin} w={6} h={6} cursor={'pointer'} />
                <Icon as={FaLink} w={6} h={6} cursor={'pointer'} />
            </Stack>
        </Box>
    );
}

export default Card;