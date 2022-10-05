import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbSurvey from '../public/images/works/survey01.png'
import thumbGif from '../public/images/works/gif02.png'
import thumbRohani from '../public/images/works/rohani01.jpg'
import thumbVektor from '../public/images/works/vektor01.jpg'
import thumbKapasitor from '../public/images/works/kapasitor01.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem
            id="lojamusic"
            title="Loja Music"
            thumbnail={thumbWalknote}
          >
            Loja Music
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="survey" thumbnail={thumbSurvey} title="Survey App">
            An app that have feature to make a survey like google form.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="gif" thumbnail={thumbGif} title="Gif Generator">
            An app that can generate gif what we need.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Video
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="rohani"
            thumbnail={thumbRohani}
            title="Musik Video"
          >
            Video Musik Lagu Rohani
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="vektor" thumbnail={thumbVektor} title="Video Edukasi">
            Video Pembelajaran Kelas X SMA
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="kapasitor" thumbnail={thumbKapasitor} title="Video Edukasi">
            Video Pembelajaran Kelas X SMA
          </WorkGridItem>
        </Section>
      </SimpleGrid>

        
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
