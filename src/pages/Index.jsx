import React from "react";
import { Box, VStack, HStack, Avatar, AvatarBadge, Heading, Text, Input, Divider, Spacer, Container } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const ChatItem = ({ name, message, time, profilePic, unread }) => (
  <HStack px={4} py={3} spacing={4} _hover={{ bg: "gray.100", cursor: "pointer" }}>
    <Avatar name={name} src={profilePic}>
      {unread && <AvatarBadge boxSize="1em" bg="green.500" />}
    </Avatar>
    <VStack spacing={0} align="start">
      <Text fontWeight="500">{name}</Text>
      <Text fontSize="sm" color="gray.500" noOfLines={1}>
        {message}
      </Text>
    </VStack>
    <Spacer />
    <Text fontSize="xs" color="gray.500">
      {time}
    </Text>
  </HStack>
);

const ChatMessage = ({ message, from, time }) => (
  <VStack spacing={1} alignSelf={from === "me" ? "end" : "start"} alignItems={from === "me" ? "end" : "start"} maxW="80%">
    <Box bg={from === "me" ? "blue.500" : "gray.100"} px={4} py={2} borderRadius="lg">
      <Text color={from === "me" ? "white" : "gray.800"}>{message}</Text>
    </Box>
    <Text fontSize="xs" color="gray.500">
      {time}
    </Text>
  </VStack>
);

const Index = () => {
  return (
    <HStack h="100vh" spacing={0} align="stretch">
      <Box w="30%" borderRightWidth={1} borderRightColor="gray.200">
        <VStack spacing={0} align="stretch">
          <HStack px={4} py={3} borderBottomWidth={1} borderBottomColor="gray.200">
            <Avatar name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjExMjB8MA&ixlib=rb-4.0.3&q=80&w=1080">
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <Heading size="lg">Chats</Heading>
          </HStack>
          <ChatItem name="Alice Smith" message="Hey there! How's it going?" time="10:31 AM" profilePic="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080" unread />
          <ChatItem name="Bob Johnson" message="I'll send over the files this afternoon" time="Yesterday" profilePic="https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjExMjB8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <ChatItem name="Carol Williams" message="Sounds good, see you then!" time="Tuesday" profilePic="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>
      </Box>

      <VStack flex={1} p={4} spacing={4} align="stretch">
        <HStack spacing={3}>
          <Avatar name="Alice Smith" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <VStack spacing={0} align="start">
            <Text fontWeight="500">Alice Smith</Text>
            <Text fontSize="sm" color="gray.500">
              Online
            </Text>
          </VStack>
        </HStack>

        <Divider />

        <VStack spacing={3} align="stretch" overflowY="auto">
          <ChatMessage message="Hey Alice! How are you doing?" from="me" time="10:31 AM" />
          <ChatMessage message="I'm great thanks! How about you?" from="other" time="10:32 AM" />
          <ChatMessage message="Doing well! Wanted to see if you had a chance to review the proposal I sent over?" from="me" time="10:32 AM" />
          <ChatMessage message="Not yet, but I'll take a look this afternoon and let you know if I have any feedback." from="other" time="10:33 AM" />
          <ChatMessage message="Sounds good, thanks!" from="me" time="10:33 AM" />
        </VStack>

        <Divider />

        <HStack>
          <Input placeholder="Type a message" size="lg" />
          <Box as={FaCheck} size="xs" color="blue.500" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Index;
