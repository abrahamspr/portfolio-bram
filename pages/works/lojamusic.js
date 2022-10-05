import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="lojamusic">
    <Container>
      <Title>
        Loja Music <Badge>2021-</Badge>
      </Title>
      <P>
        A Music Player App, Which is have feature to save and play our favorite song.
        This App is my final project for university.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Expo, React Native, AWS Amplify</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/musik01.png" alt="lojamusic" />
        <WorkImage src="/images/works/musik02.png" alt="lojamusic" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
