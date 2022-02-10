import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <Container maxW={'7xl'} mt={10}>
            <Center height={'100%'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={10}
                    mt={{ base: 10, md: 0 }}
                    px={{ base: 0, md: 10 }}
                    minH={'600px'}
                    direction={{ base: 'column', md: 'column', lg: 'row' }}
                    borderRadius={'2xl'}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'white'}
                            >
                                404
                            </Text>
                            <br />
                            <Text as={'span'} color={'purple.600'} position={'relative'} textTransform={'capitalize'}>
                                Page not found
                            </Text>
                        </Heading>
                        <Text color={'gray.300'} position={'relative'} fontSize={'xl'}>
                            The page you're looking for does not seem to exist
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}>
                            <Button
                                rounded={'full'}
                                size={'lg'}
                                px={6}
                                color={'white'}
                                bg={'purple.600'}
                                _hover={{ bg: 'purple.500' }}
                                _focus={{ border: 'none' }}
                                _active={{ bg: 'purple.600' }}
                                onClick={() => router.replace("/")}
                            >
                                Go to Home
                            </Button>
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Box
                            position={'relative'}
                            rounded={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    '/error.svg'
                                } />
                        </Box>
                    </Flex>
                </Stack>
            </Center>
        </Container>
    );
}