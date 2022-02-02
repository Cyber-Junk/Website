import { useState } from 'react';
import {
    Stack,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
} from '@chakra-ui/react';
import { BsCheck } from 'react-icons/bs';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState(false);

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            width={'100%'}>
            <Container
                maxW={'lg'}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                direction={'column'}
                style={{backdropFilter: "blur(10px)"}}
                >
                <Heading
                    as={'h2'}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    textAlign={'center'}
                    mb={5}>
                    Subscribe to our Newsletter
                </Heading>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setError(false);
                        setState('submitting');

                        // remove this code and implement your submit logic right here
                        setTimeout(() => {
                            if (email === 'fail@example.com') {
                                setError(true);
                                setState('initial');
                                return;
                            }

                            setState('success');
                        }, 1000);
                    }}>
                    <FormControl>
                        <Input
                            variant={'solid'}
                            borderWidth={1}
                            color={'gray.800'}
                            _placeholder={{
                                color: 'gray.400',
                            }}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            id={'email'}
                            type={'email'}
                            required
                            placeholder={'Your Email'}
                            aria-label={'Your Email'}
                            value={email}
                            disabled={state !== 'initial'}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </FormControl>
                    <FormControl w={{ base: '100%', md: '40%' }}>
                        <Button
                            colorScheme={state === 'success' ? 'green' : 'blue'}
                            isLoading={state === 'submitting'}
                            w="100%"
                            type={state === 'success' ? 'button' : 'submit'}>
                            {state === 'success' ? <BsCheck size={'xl'}/> : 'Submit'}
                        </Button>
                    </FormControl>
                </Stack>
                <Text
                    mt={2}
                    textAlign={'center'}
                    color={error ? 'red.500' : 'gray.300'}>
                    {error
                        ? 'Oh no an error occured! 😢 Please try again later.'
                        : "You won't receive any spam! ✌️"}
                </Text>
            </Container>
        </Flex>
    );
}