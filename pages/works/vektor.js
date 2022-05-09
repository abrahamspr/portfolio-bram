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
    <Layout title="vektor">
      <Container>
        <Title>
          Education Video <Badge>2020</Badge>
        </Title>
        <P>FISIKA KELAS X SMA - VEKTOR </P>
        <P>
          It is one of the my video projects launched at{' '}
          <Link href="https://www.youtube.com/channel/UCyX2fjnphs3AO9grxBUXJlQ" target="_blank">
            Binsar Napitu Channel <ExternalLinkIcon mx="2px" />
          </Link>
          where in this project I made a learning
          video aimed at high school students in class X
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
  
        <WorkImage src="/images/works/vektor01.jpg" alt="vektor" />
        <WorkImage src="/images/works/vektor02.png" alt="vektor" />
        <WorkImage src="/images/works/vektor03.png" alt="vektor" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  