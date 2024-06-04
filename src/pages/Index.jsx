import React from "react";
import { Container, VStack, Text, Heading, Box, List, ListItem, ListIcon, Link, Image, IconButton } from "@chakra-ui/react";
import { FaCheckCircle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          BirdW8 Vereniging
        </Heading>
        <Text fontSize="lg">Welkom bij de BirdW8 vereniging van natuurliefhebbers. Ons doel is de instandhouding en verbetering van de vogelstand en haar leefmilieu.</Text>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Onze Doelen
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Bevorderen van de naleving van bepalingen en voorschriften op het gebied van de bescherming van de vogelstand.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Propaganda maken ter verbreiding van de vogelbeschermingsgedachte.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Steun verwerven bij overheden, corporaties en particulieren.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Lidmaatschap
          </Heading>
          <Text>Leden ontvangen viermaal per jaar het blad "de Koekoek" en zijn welkom op alle activiteiten. De contributie bedraagt minimaal € 25,-- per jaar.</Text>
          <Text mt={2}>Donateurs ontvangen tweemaal per jaar de nieuwsbrief "de Onomatopee" en een gratis uitnodiging voor grote film- of diavoorstellingen. De donateursbijdrage bedraagt minimaal € 8,-- per jaar.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Aanmelden
          </Heading>
          <Text>Nieuwe leden kunnen zich via de website direct aanmelden of afmelden. Leden kunnen ook hun gegevens wijzigen en zich aanmelden voor excursies en werkgroepen.</Text>
          <Text mt={2}>
            <Link color="teal.500" href="#">
              Aanmeldingsformulier downloaden
            </Link>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Social Media
          </Heading>
          <Text>Volg ons op social media:</Text>
          <Box mt={2}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" mr={2} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" mr={2} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Box>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Project BirdW8
          </Heading>
          <Text>Als beginnende professional in jouw rol als Expert IT Systems and Devices ga je zelfstandig aan de slag op de ICT-afdeling van een organisatie of een servicedesk-omgeving.</Text>
          <Text mt={2}>Naast het beheren van IT-infrastructuur, applicaties en apparaten, ga je je ook bezighouden met het beveiligen van informatiesystemen. Hoe gaaf is het dat jij securityadvies gaat geven, systemen gaat verbeteren en zelfs gaat reageren op cybersecurityaanvallen?</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Projectplanning
          </Heading>
          <Image src="https://images.unsplash.com/photo-1608303588026-884930af2559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmd8ZW58MHx8fHwxNzE3NDg5NzE3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project Planning" />
          <Text mt={2}>Bekijk onze gedetailleerde projectplanning voor de komende weken. We hebben een strak schema om ervoor te zorgen dat alle doelen op tijd worden bereikt.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
