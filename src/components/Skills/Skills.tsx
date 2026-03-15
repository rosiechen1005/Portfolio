// import { FC } from 'react'
// import {
//     Container,
//     VStack,
//     Stack,
//     Heading,
//     StackDivider,
//     useColorModeValue,
// } from '@chakra-ui/react'
// import {
//     SiFlask,
//     SiHtml5,
//     SiJava,
//     SiPhp,
//     SiPython,
//     SiReact,
//     SiTypescript,
//     SiBootstrap,
//     SiMysql,
//     SiMongodb,
//     SiVisualstudiocode,
//     SiGit,
//     SiLatex,
//     SiDocker,
//     SiGo,
//     SiNodedotjs,
//     SiPostgresql,
//     SiC,
//     SiFirebase,
//     SiCsharp,
//     SiDotnet,
//     SiAmazonaws,
//     SiTailwindcss,
//     SiChakraui,
//     SiDjango,
//     SiPostman,
//     SiDatadog,
//     SiStorybook,
//     SiGraphql,
//     SiNextdotjs,
// } from 'react-icons/si'
// import { Element } from 'react-scroll'
// import Fade from 'react-reveal/Fade'
// import SkillSection from './SkillSection'
// import SkillItem from './SkillItem'
// import Card from '../generics/Card'

// const Skills: FC = () => {
//     return (
//         <Element name='skills'>
//             <Container maxW={'5xl'} p={6.5} mt={20}>
//                 <VStack spacing={8}>
//                     <Fade>
//                         <Heading as='h2'>Skills</Heading>
//                     </Fade>
//                     <Stack direction={'row'}>
//                         <Card>
//                             <Stack
//                                 direction={['column', 'row']}
//                                 divider={
//                                     <StackDivider
//                                         borderColor={useColorModeValue(
//                                             'gray.300',
//                                             'gray.600'
//                                         )}
//                                     />
//                                 }
//                                 spacing={8}
//                                 align={'flex-start'}
//                             >
//                                 <SkillSection title={'Languages'}>
//                                     <SkillItem icon={SiPython} name='Python' />
//                                     <SkillItem
//                                         icon={SiTypescript}
//                                         name='Typescript'
//                                     />
//                                     <SkillItem icon={SiJava} name='Java' />
//                                     <SkillItem icon={SiPhp} name='PHP' />
//                                     <SkillItem icon={SiHtml5} name='HTML/CSS' />
//                                     <SkillItem icon={SiGo} name='Golang' />
//                                     <SkillItem icon={SiC} name='C' />
//                                     <SkillItem icon={SiCsharp} name='C#' />
//                                 </SkillSection>
//                                 <SkillSection title={'Frameworks'}>
//                                     <SkillItem icon={SiReact} name='ReactJS' />
//                                     <SkillItem icon={SiNextdotjs} name='NextJS' />
//                                     <SkillItem
//                                         icon={SiNodedotjs}
//                                         name='NodeJS'
//                                     />
//                                     <SkillItem
//                                         icon={SiDotnet}
//                                         name='.NET Core'
//                                     />
//                                     <SkillItem icon={SiFlask} name='Flask' />
//                                     <SkillItem icon={SiDjango} name='Django' />
//                                     <SkillItem
//                                         icon={SiChakraui}
//                                         name='ChakraUI'
//                                     />
//                                     <SkillItem
//                                         icon={SiBootstrap}
//                                         name='Bootstrap'
//                                     />
//                                     <SkillItem
//                                         icon={SiTailwindcss}
//                                         name='Tailwind CSS'
//                                     />
//                                 </SkillSection>
//                             </Stack>
//                         </Card>
//                         <Card>
//                             <Stack
//                                 direction={['column', 'row']}
//                                 divider={
//                                     <StackDivider
//                                         borderColor={useColorModeValue(
//                                             'gray.300',
//                                             'gray.600'
//                                         )}
//                                     />
//                                 }
//                                 spacing={8}
//                                 align={'flex-start'}
//                             >
//                                 <SkillSection title={'Databases'}>
//                                     <SkillItem icon={SiMysql} name='MySQL' />
//                                     <SkillItem
//                                         icon={SiPostgresql}
//                                         name='PostgreSQL'
//                                     />
//                                     <SkillItem
//                                         icon={SiMongodb}
//                                         name='MongoDB'
//                                     />
//                                     <SkillItem
//                                         icon={SiFirebase}
//                                         name='Firestore'
//                                     />
//                                     <SkillItem
//                                         icon={SiGraphql}
//                                         name='GraphQL'
//                                     />
//                                 </SkillSection>
//                                 <SkillSection title={'Other tools'}>
//                                     <SkillItem icon={SiGit} name='Git' />
//                                     <SkillItem icon={SiLatex} name='LaTeX' />
//                                     <SkillItem icon={SiDocker} name='Docker' />
//                                     <SkillItem
//                                         icon={SiVisualstudiocode}
//                                         name='VS Code'
//                                     />
//                                     <SkillItem icon={SiAmazonaws} name='AWS' />
//                                     <SkillItem
//                                         icon={SiPostman}
//                                         name='Postman'
//                                     />
//                                     <SkillItem
//                                         icon={SiDatadog}
//                                         name='Datadog'
//                                     />
//                                     <SkillItem
//                                         icon={SiStorybook}
//                                         name='Storybook'
//                                     />
//                                 </SkillSection>
//                             </Stack>
//                         </Card>
//                     </Stack>
//                 </VStack>
//             </Container>
//         </Element>
//     )
// }

// export default Skills

import { FC } from 'react'
import {
  Container,
  VStack,
  Stack,
  Heading,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiPython,
  SiR,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiGit,
  SiPostgresql,
} from 'react-icons/si'
import {
  FaDatabase,
  FaVial,
  FaChartLine,
  FaBalanceScale,
  FaSearch,
  FaCogs,
} from 'react-icons/fa'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import SkillSection from './SkillSection'
import SkillItem from './SkillItem'
import Card from '../generics/Card'

const Skills: FC = () => {
  const dividerColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Element name="skills">
      <Container maxW={'5xl'} p={6.5} mt={20}>
        <VStack spacing={8}>
          <Fade>
            <Heading as="h2">Skills</Heading>
          </Fade>

          <Stack direction={['column', 'row']} spacing={6}>
            {/* Card 1 */}
            <Card>
              <Stack
                direction={['column', 'row']}
                divider={<StackDivider borderColor={dividerColor} />}
                spacing={8}
                align={'flex-start'}
              >
                {/* 1/4 */}
                <SkillSection title="Languages">
                  <SkillItem icon={SiPython} name="Python" />
                  <SkillItem icon={FaDatabase} name="SQL" />
                  <SkillItem icon={SiR} name="R" />
                </SkillSection>

                {/* 2/4 */}
                <SkillSection title="Data Science & ML">
                  <SkillItem icon={SiPandas} name="Pandas" />
                  <SkillItem icon={SiNumpy} name="NumPy" />
                  <SkillItem icon={SiScikitlearn} name="scikit-learn" />
                  <SkillItem icon={SiPytorch} name="PyTorch" />
                  <SkillItem icon={FaChartLine} name="Time Series / Forecasting" />
                  <SkillItem icon={FaCogs} name="Feature Engineering" />
                </SkillSection>
              </Stack>
            </Card>

            {/* Card 2 */}
            <Card>
              <Stack
                direction={['column', 'row']}
                divider={<StackDivider borderColor={dividerColor} />}
                spacing={8}
                align={'flex-start'}
              >
                {/* 3/4 */}
                <SkillSection title="Experiments & Statistics">
                  <SkillItem icon={FaVial} name="A/B Testing" />
                  <SkillItem icon={FaVial} name="Power Analysis" />
                  <SkillItem icon={FaBalanceScale} name="Hypothesis Testing" />
                  <SkillItem icon={FaBalanceScale} name="Regression Modeling" />
                  <SkillItem icon={FaChartLine} name="Model Evaluation / CV" />
                </SkillSection>

                {/* 4/4 */}
                <SkillSection title="Data & ML Systems">
                <SkillItem icon={SiGit} name="Git" />
                  <SkillItem icon={FaSearch} name="LLMs / RAG & Vector Search" />
                  <SkillItem icon={FaChartLine} name="D3.js / Interactive Viz" />
                  <SkillItem icon={FaCogs} name="HPC / Distributed Compute" />
                </SkillSection>
              </Stack>
            </Card>
          </Stack>
        </VStack>
      </Container>
    </Element>
  )
}

export default Skills