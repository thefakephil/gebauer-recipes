import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link';
import Nav from '../../components/nav'
import Date from '../../components/date';
import { getSortedPostsData } from '../../../lib/posts'
import { getSortedProjectData } from '../../../lib/projects'


export default function ProjcetList({ allProjectData }) {
  return (
    <>
    <Nav /> 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <hr/> 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
      <hr/>
    </Layout>
  </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allProjectData = getSortedProjectData()
  return {
    props: {
      allProjectData
    }
  }
}