import client from 'graphql/client'
import AboutTemplate from 'template/About'
import { GET_PAGES } from 'graphql/queries'

export default function About() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log('🚀 ~ file: about.tsx ~ line 11 ~ getStaticProps ~ pages', pages)

  return {
    props: {}
  }
}
