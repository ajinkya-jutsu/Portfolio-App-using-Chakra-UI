import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import {Icon} from '@chakra-ui/react';
import { GiSpiderWeb, GiEvilHand, GiPhotoCamera } from 'react-icons/gi'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex alignSelf={"center"} direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "80vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    10+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Web Shooter, Combat Fighter and Part-time Photographer</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="md" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.100" h="25vh" w="25vh" justify="flex-end">
                        <Icon color="black" p="4" as={GiSpiderWeb} w="24" h="24" />
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                            Web Shooter
                        </Text>
                    </Flex>
                    <Flex rounded="md" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "green.400" }}>
                        <Icon color="black" p="4" as={GiEvilHand} w="24" h="24" />
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                            Combat Fighter
                        </Text>
                    </Flex>
                    <Flex rounded="md" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "green.400" }}>
                        <Icon as={GiPhotoCamera} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="md" fontWeight="semibold">
                            Photographer
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile
