import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading, Image } from '@chakra-ui/react';
import Card from './Card';
import { Fragment } from 'react';

const projects = [
  {
    title: 'Facebook - Social Media Platform',
    description: 'Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.',
    getImageSrc: () => require('../assets/image/facebook.png'),
  },
  {
    title: 'Instagram - Photo and video sharing Platform',
    description:
      'Instagram is a photo and video sharing social networking service owned by American company Meta Platforms. The app allows users to upload media that can be edited with filters, be organized by hashtags, and be associated with a location — via geographical tagging',
    getImageSrc: () => require('../assets/image/instagram.png',)
  },
  {
    title: 'Snapchat - Multimedia Instant Messaging Platform',
    description:
      'Snapchat is an American multimedia instant messaging app and service developed by Snap Inc., originally Snapchat Inc. One of the principal features of Snapchat is that pictures and messages are usually only available for a short time before they become inaccessible to their recipients',
    getImageSrc: () => require('../assets/image/snapchat.png'),
  },
];

const ProjectsSection = () => {
  return (
      <FullScreenSection
        backgroundColor="blue.500"
        isDarkBackground
        p={8}
        alignItems="center"
        spacing={8}
        id="project-section"
      >
        <Heading
          as="h1"
          id="projects-section"
        >
          Project Portfolio
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
        >
          {projects.map(({title, description, getImageSrc}) => (
            <Fragment key={title}>
              <Card 
                title={title}
                description={description}
                getImageSrc={getImageSrc()}
              />
              <Image src={getImageSrc()} alt={title} borderRadius="lg" />
            </Fragment>
          ))}
        </Box>
      </FullScreenSection>
  );
};

export default ProjectsSection;
