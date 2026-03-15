import { FC } from 'react'
import {
    Container,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Box,
    Button,
    Link,
    Icon,
} from '@chakra-ui/react'
import ReactTypingEffect from 'react-typing-effect'
import Fade from 'react-reveal/Fade'
import Socials from '../global/Socials'
import { Element } from 'react-scroll'
import DownArrow from './DownArrow'
import { FiArrowUpRight } from 'react-icons/fi'

const Intro: FC = () => {
    return (
        <Element name='home'>
            <Container maxW={'6xl'} p={6.75} pt={['25vh', '35vh']} h={'100vh'}>
                <VStack>
                    <Heading
                        fontSize={'3.5rem'}
                        fontWeight={500}
                        fontFamily={'source-code-pro, monospace'}
                        textAlign='center'
                    >
                        <ReactTypingEffect
                            text='Rosie (Rosalinda) Chen'
                            speed={85}
                            eraseDelay={1000000}
                            typingDelay={650}
                            cursor='_'
                        />
                    </Heading>
                    <Text
                        fontSize={'1.25rem'}
                        fontWeight={300}
                        color={useColorModeValue('#5a657c', '#9199a9')}
                    >
                        📍 Fremont, CA
                    </Text>
                    <Fade bottom cascade>
                    <Text
                        fontSize={'1.5rem'}
                        fontWeight={300}
                        color={useColorModeValue('#5a657c', '#9199a9')}
                        textAlign='center'
                        letterSpacing={1.1}
                    >
                        Data Scientist & ML Engineer
                        <br />
                        <Box as="span" pl={6}>
                            {`UCLA '26 → Carnegie Mellon M.S. Applied Data Science '27`}
                        </Box>
                    </Text>
                        <Box p={4}>
                            <Socials
                                color={useColorModeValue('#5a657c', '#9199a9')}
                            />
                        </Box>
                    </Fade>
                    <Link
                        href={`${typeof window !== 'undefined' ? window.location.origin : ''}/Resume_Rosie_Chen.pdf`}
                        isExternal
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecor: 'none' }}
                    >
                        <Button
                            variant={'outline'}
                            colorScheme={'cyan'}
                            aria-label={'View Resume'}
                            rightIcon={
                                <Icon
                                    as={FiArrowUpRight}
                                    fontSize={18}
                                    mt={'3px'}
                                />
                            }
                            rounded={'full'}
                            border={'2px'}
                            pb={1}
                            mt={2}
                        >
                            Resume
                        </Button>
                    </Link>
                </VStack>
                <Box mt={[10, '10vh']}>
                    <DownArrow />
                </Box>
            </Container>
        </Element>
    )
}

export default Intro
