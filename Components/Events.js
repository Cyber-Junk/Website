import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Badge,
    Img
} from '@chakra-ui/react';

export default function Event() {
    return (
        <Center py={6}>
            <Box
                maxW={'350px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                m={5}
                style={{ backdropFilter: "blur(10px)" }}
            >
                <Box
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Img
                        src={
                            'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        }
                        objectFit={'contain'}
                    />
                </Box>
                <Stack>
                    <Badge
                        color={'#682ae9'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}
                        bg={'white'}
                        mr={'auto'}
                        px={2}
                        py={1}
                        rounded={'md'}
                    >
                        Web
                    </Badge>
                    <Heading
                        color={'white'}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Full-Stack development
                    </Heading>
                    <Text color={'gray.300'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.300'}>web dev at google</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}