import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/eigrp.png'
import thumbMyDeskSetup from '../public/images/contents/java.png'
import thumb500PaidUsers from '../public/images/contents/game.png'
import thumbFinancialGoal from '../public/images/contents/culture.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="EIGRP | Cisco Intermediate"
            thumbnail={thumbFishWorkflow}
            href="https://youtu.be/0_oMVc5IAmY"
          />
          <GridItem
            title="Query Sql dengan Java di Netbeans | Java For Intermediate"
            thumbnail={thumbMyDeskSetup}
            href="https://youtu.be/twpEVuCVgd8"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Pembahasan Mengenai Platform, Bahasa Pemrogaman Game, Dan Sasaran Pasar Game"
            thumbnail={thumb500PaidUsers}
            href="https://laekandung.blogspot.com/2019/12/pembahasan-mengenai-platform-bahasa.html"
          />
          <GridItem
            title="Participatory culture: mobility, interactivity and identity."
            thumbnail={thumbFinancialGoal}
            href="https://laekandung.blogspot.com/2019/12/participatory-culture-mobility.html"
          />
        </SimpleGrid>
      </Section>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
