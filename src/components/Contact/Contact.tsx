import { FC } from 'react'
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Card from '../generics/Card'

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact me</Heading>
                    </Fade>
                    <Card maxW={'85vw'} w={'xl'} pb={8} overflow={'hidden'}>
                        <Flex textAlign={'center'}>
                            <Container w='50%'>
                                <Link href='mailto:chenherosalinda@gmail.com'>
                                    <Badge colorScheme='green'>Personal</Badge>
                                    <Text textDecoration={'underline'}>
                                    chenherosalinda@gmail.com
                                    </Text>
                                </Link>
                            </Container>
                            <Spacer />
                            <Container w='50%'>
                                <Link href='mailto:rosiechen1005@ucla.edu'>
                                    <Badge colorScheme='orange'>Academic</Badge>
                                    <Text textDecoration={'underline'}>
                                    rosiechen1005@ucla.edu
                                    </Text>
                                </Link>
                            </Container>
                        </Flex>
                    </Card>
                </VStack>
            </Container>
        </Element>
    )
}

export default Contact
