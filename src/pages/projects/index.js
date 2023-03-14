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
      <section className={utilStyles.headingMd}>
        <p>
        Hey I&lsquo;m Phil - I made this site to help me get my projects out in the open, including a few blog posts along the way. 

        I set a few guidelines to help to this - </p> 
        <ul> 
          <li> • Prioritize low / no code solutions to get it done ASAP (refactor later)</li>
          <li> • Post process here (as much as possible) </li>
          <li> • Fail! Fail quickly and often. But also recognize the wins along the way. </li>  
        </ul> 
      </section>
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