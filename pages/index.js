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
} from "@chakra-ui/react";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Home() {
  return <Hero />;
}
