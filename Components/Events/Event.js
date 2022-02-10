import Image from 'next/image';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Badge,
    Img,
    Button
} from '@chakra-ui/react';

export default function Event({ type, name, description }) {
    return (
        <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
            maxW={'350px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            m={5}
            style={{ backdropFilter: "blur(5px)" }}
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
                    {type}
                </Badge>
                <Heading
                    color={'white'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    textTransform={'capitalize'}
                >
                    {name}
                </Heading>
                <Text color={'gray.300'}>
                    {description}
                </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Button
                    variant="solid"
                    bg="purple.600"
                    color="white"
                    _hover={{
                        bg: "purple.500"
                    }}
                    _focus={{
                        border: "none",
                    }}
                    _active={{
                        bg: 'purple.600'
                    }}
                >
                    Register
                </Button>
            </Stack>
        </Flex >
    );
}