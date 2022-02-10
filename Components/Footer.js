import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            w={'100%'}
            color={'white'}
            mt={10}
            style={{ backdropFilter: "blur(10px)" }}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 3fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Heading color={'white'}>CyberJunk</Heading>
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2020 CyberJunk All rights reserved
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <IconButton
                                aria-label="Discord"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _focus={{ border: "none" }}
                                _hover={{ bg: 'purple.600' }}
                                _active={{ bg: 'purple.500' }}
                                icon={<FaDiscord size="28px" />}
                            />
                            <IconButton
                                aria-label="Twitch"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _focus={{ border: "none" }}
                                _hover={{ bg: 'purple.600' }}
                                _active={{ bg: 'purple.500' }}
                                icon={<FaTwitch size="28px" />}
                            />
                            <IconButton
                                aria-label="Youtube"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _focus={{ border: "none" }}
                                _hover={{ bg: 'purple.600' }}
                                _active={{ bg: 'purple.500' }}
                                icon={<FaYoutube size="28px" />}
                            />
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About us</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Contact us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={'whiteAlpha.300'}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.400',
                                }}
                            />
                            <IconButton
                                bg={'purple.600'}
                                color={'white'}
                                _hover={{
                                    bg: 'purple.500'
                                }}
                                _focus={{
                                    border: 'none'
                                }}
                                _active={{
                                    bg: 'purple.600'
                                }}
                                aria-label="Subscribe"
                                icon={<BiSend size={'20px'} />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}