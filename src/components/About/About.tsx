import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.jpg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='300px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Rosie - an incoming Masters student at <b> Carnegie Mellon University </b> in Applied Data Science. 
                                        Currently, I'm a final year student in Statistics & Data Science and Applied Math (Computing) at <b> University of California, Los Angeles (UCLA)</b>. 
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text whiteSpace="pre-wrap">
{`My work focuses on building real-word constrained models, including:
        1. I’ve analyzed over a million national mortgage records to uncover structural lending disparities, with findings compiled into a published brief contributing to national policy discussions.
        2. In climate research, I developed spatiotemporal models identifying corn crop yield drivers across the U.S. Corn Belt — work that now serves as a foundation for long-term agricultural yield forecasting efforts.
        3. In sports analytics, I’ve delivered match-level performance reports within 72 hours, directly informing player strategy adjustments under tight deadlines.`}
</Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                    I work primarily in <b>SQL</b>, <b>Python</b>, and <b>R</b>, 
                                    building data pipelines and predictive models designed to perform 
                                    under imperfect, real-world conditions — including multi-source integration, 
                                    temporal misalignment, and noisy inputs, translating results into something stakeholders can actually use.
                                                                        </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                    Beyond traditional statistical modeling, I’ve also explored system-level applications of modern ML tools. I’ve built retrieval-augmented recommendation systems to help UCLA students navigate course planning decisions, and contributed to robotics research focused on aligning visual perception with action policies. More recently, I’ve been experimenting with algorithmic optimization through computational string art — using greedy and gradient-based methods to approximate complex visual structures.                                    </Text>
                                </Flex>
                            </Fade>
                            {/* <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in the confluence of
                                        artificial intelligence and cognitive
                                        science, as well as photography! Check
                                        out my&nbsp;
                                        <Link
                                            href='https://photo.rosiechen.com'
                                            isExternal
                                            fontWeight={'semibold'}
                                            borderBottom={
                                                '2px solid rgb(154, 228, 217)'
                                            }
                                            transition={'0.2s'}
                                            _hover={{
                                                textDecor: 'none',
                                                opacity: 0.9,
                                            }}
                                        >
                                            photography portfolio to learn more
                                            about my creative work.
                                        </Link>
                                    </Text>
                                </Flex>
                            </Fade> */}
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
