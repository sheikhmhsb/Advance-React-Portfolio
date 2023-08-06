import React from 'react';
import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { Link as ScrollLink } from 'react-scroll';
import avatar from '../assets/image/avatar.png';
const greeting = 'Hello, I am Sheikh Haseeb!';
const shortbio = 'I am React developer';

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="whiteAlpha.500"
  >
    <Box
      display="grid"
      gridTemplateColumns="repeat(2,minmax(0,1fr))"
      gridGap={8}
      placeItems="center"
    >
      <Box
        color="blackAlpha.800"
        maxW="28rem"
      >
        <Heading mb={4}>{greeting}</Heading>
        <Text fontSize="xl">
          {shortbio}
        </Text>
        <Button
          size="lg"
          bgColor="blue"
          color="whiteAlpha.800"
          mt="24px"
          as={ScrollLink}
          to="projects-section"
          smooth={true}
          duration={500}
        >
          My Projects
        </Button>
      </Box>

      <Avatar
        name="Sheikh Haseeb"
        src={avatar}
        size="2xl"
      >

      </Avatar>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
