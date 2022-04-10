import { Center, Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const getletter = (text) => {
    return (
        text.split("").map((letter, id) => (
            <motion.h1 key={id} style={{ display: "inline-block" }}
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: id * 0.5,
                    type: "spring",
                    bounce: 1,
                    damping: 8,
                }}
            >{letter}</motion.h1>
        ))
    );
}

export default function Loader() {
    return (
        <Center w={'100%'} h={'100vh'} bg={'black'}>
            <Heading fontSize={['2xl','6xl','8xl','9xl']} letterSpacing={[10,10,20]}>{getletter("CYBERJUNK")}</Heading>
        </Center>
    )
}