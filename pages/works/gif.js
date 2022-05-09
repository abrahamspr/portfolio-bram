import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="gif">
    <Container>
      <Title>
        Gif Generator <Badge>2019-</Badge>
      </Title>
      <P>
      An app that can generate gif what we need.
      Build with Vue and Generate gif with API from Giphy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue</span>
        </ListItem>
      </List>

        <WorkImage src="/images/works/gif01.png" alt="gif" />
        <WorkImage src="/images/works/gif02.png" alt="gif" />  

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
