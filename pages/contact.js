import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Img,
  useToast,
  Link,
  chakra,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../Components/Footer";

const MotionImg = motion(Img);
const MotionBox = motion(Box);

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        msg,
      }),
    });

    const data = res.json();

    if (res.status == 200) {
      toast({
        title: "Mail sent Successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Some error occured.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction={"column"} w="full">
      <Container maxW="full" py={10} overflow="hidden" my={20}>
        <MotionBox
          boxSize={200}
          bg={"purple.500"}
          mb={-48}
          rounded={"3xl"}
          ml={10}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        ></MotionBox>
        <MotionBox
          w={"300px"}
          mb={-40}
          ml={-16}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <MotionImg
            src="/contact.webp"
            initial={{ y: -15 }}
            whileInView={{ y: 15 }}
            transition={{
              duration: 2,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </MotionBox>
        <Flex justifyContent={"center"} rounded={"xl"}>
          <Box
            style={{ backdropFilter: "blur(5px)" }}
            shadow={"2xl"}
            color={"white"}
            rounded={"2xl"}
            p={10}
          >
            <Box p={4}>
              <Flex
                spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
                justifyContent={"center"}
                flexWrap={"wrap"}
              >
                <Flex justifyContent={"center"} mx={5}>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <chakra.a href="tel:+917733997029" target="_blank">
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="white"
                            _focus={{ border: "none" }}
                            _hover={{ border: "2px solid #6B46C1" }}
                            _active={{ bg: "transparent" }}
                            leftIcon={<MdPhone color="#6B46C1" size="20px" />}
                          >
                            +91-7733997029
                          </Button>
                        </chakra.a>
                        <chakra.a
                          href="mailto:cyberjunk.cj@gmail.com"
                          target="_blank"
                        >
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="white"
                            _focus={{ border: "none" }}
                            _hover={{ border: "2px solid #6B46C1" }}
                            _active={{ bg: "transparent" }}
                            leftIcon={<MdEmail color="#6B46C1" size="20px" />}
                          >
                            cyberjunk.cj@gmail.com
                          </Button>
                        </chakra.a>
                        <chakra.a
                          href="https://www.google.com/maps/place/India"
                          target="_blank"
                        >
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="white"
                            _focus={{ border: "none" }}
                            _hover={{ border: "2px solid #6B46C1" }}
                            _active={{ bg: "transparent" }}
                            leftIcon={
                              <MdLocationOn color="#6B46C1" size="20px" />
                            }
                          >
                            India
                          </Button>
                        </chakra.a>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <Link
                        href="https://www.linkedin.com/company/cyber-junk/mycompany/"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="Linkedin"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _focus={{ border: "none" }}
                          _hover={{ bg: "purple.600" }}
                          _active={{ bg: "purple.500" }}
                          icon={<FaLinkedin size="28px" />}
                        />
                      </Link>
                      <Link
                        href="https://twitter.com/CyberJunk_"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="Twitter"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _focus={{ border: "none" }}
                          _hover={{ bg: "purple.600" }}
                          _active={{ bg: "purple.500" }}
                          icon={<FaTwitter size="28px" />}
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/cyber.junk_/"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="Instagram"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _focus={{ border: "none" }}
                          _hover={{ bg: "purple.600" }}
                          _active={{ bg: "purple.500" }}
                          icon={<FaInstagram size="28px" />}
                        />
                      </Link>
                    </HStack>
                  </Box>
                </Flex>
                <Flex>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              _focus={{ borderColor: "purple.600" }}
                              name="name"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="email"
                              size="md"
                              _focus={{ borderColor: "purple.600" }}
                              name="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            _focus={{ borderColor: "purple.600" }}
                            name="message"
                            value={msg}
                            onChange={(e) => {
                              setMsg(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="purple.600"
                            color="white"
                            _hover={{
                              bg: "purple.500",
                            }}
                            _focus={{
                              border: "none",
                            }}
                            _active={{
                              bg: "purple.600",
                            }}
                            onClick={handleSubmit}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Flex>
  );
}
