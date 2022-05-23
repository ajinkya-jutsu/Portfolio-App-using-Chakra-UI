import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="300px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5.5x1" fontWeight="normal">Hello, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, red.400, blue.600)" bgClip='text'>Andrew Spider</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Your friendly neighborhood Spider-Man</Text>
                    <Button mt={8} colorScheme="blue">Hire Me</Button>

                </Box>
                <Image alignSelf="flex-end" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://www.sonypictures.com/sites/default/files/styles/max_360x390/public/banner-images/2019-06/theamazingspiderman_banner_2572x1100_copyright.png?h=abc6acbe&itok=EoBP2cMJ' />
            </Flex>

        </Stack>
    )
}

export default Header
