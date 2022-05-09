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
    <Layout title="mode.tokyo">
      <Container>
        <Title>
          Music Video <Badge>2020</Badge>
        </Title>
        <P>KJ 337 - BETAPA KITA TIDAK BERSYUKUR (Cover Version)</P>
        <P>
          It is one of the my video projects launched at{' '}
          <Link href="https://www.youtube.com/channel/UCyX2fjnphs3AO9grxBUXJlQ" target="_blank">
            Binsar Napitu Channel <ExternalLinkIcon mx="2px" />
          </Link>
          where in this song is a spiritual song contained
          in the hymn of the congregation.
          This song was made to give encouragement during a pandemic.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Adobe Premiere, After Effect, Photoshop</span>
          </ListItem>
          <ListItem>
            <Meta>Channel</Meta>
            <Link href="https://www.youtube.com/channel/UCyX2fjnphs3AO9grxBUXJlQ/videos">
              Binsar Napitu{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/rohani01.jpg" alt="rohani" />
        <WorkImage src="/images/works/rohani02.png" alt="rohani" />
        <WorkImage src="/images/works/rohani03.png" alt="rohani" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  