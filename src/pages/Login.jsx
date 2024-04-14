import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, VStack, Heading, Text, Input, Button } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
   
    setTimeout(() => {
      const user = {
        name: "John Doe",
        email: "john@example.com",
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjExMjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      };
      onLogin(user);
      navigate("/");
    }, 1000);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} align="stretch">
        <Heading>Welcome to ChatApp</Heading>
        <Text>Please log in to continue</Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In
        </Button>
        <Button variant="link">Create Account</Button>
      </VStack>
    </Container>
  );
};

export default Login;