import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <VStack bgColor="whiteAlpha.900" color="blackAlpha.800" borderRadius="lg" alignItems="center" justifyContent="center">
      <VStack alignItems="flex-start" padding="3">
        {/* <Image src={imageSrc} alt={title} /> */}
        <Heading as="h3">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Link>See More</Link>
          <FontAwesomeIcon size="1x" icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
