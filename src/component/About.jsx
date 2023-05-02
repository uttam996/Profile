import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function SocialProfileSimple() {
  return (
    <Center py={6}>
         <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}
      >
      <Box
        maxW={"820px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
  Uttam Singh
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          As a MERN stack developer, I have expertise in building full-stack web applications using MongoDB, ExpressJS, ReactJS, and NodeJS. With my skills and experience, I have developed various applications ranging from simple landing pages to complex web applications that require real-time data processing and scalability.


          <Link href={"#"} color={"blue.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
      </motion.div>
    </Center>
  );
}
