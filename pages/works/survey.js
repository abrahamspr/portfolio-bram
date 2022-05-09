import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="survey">
    <Container>
      <Title>
        Survey App <Badge>2022</Badge>
      </Title>
      <P>
      a website that is used to create surveys where we
      can monitor the number of surveys we make and can
      see the responses to our surveys.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Laravel, Vue, Sass</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/abrahamspr/laravel-withVue">
          github.com/abrahamspr/laravel-withVue <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>



      <WorkImage src="/images/works/survey01.png" alt="survey" />
      <WorkImage src="/images/works/survey02.png" alt="survey" />
      <WorkImage src="/images/works/survey03.png" alt="survey" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
