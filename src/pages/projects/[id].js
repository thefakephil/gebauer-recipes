import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData  } from '../../../lib/projects';
import Head from 'next/head'
import Nav from '../../components/nav'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Projects({ projectData }) {
  return (
    <> 
    <Nav /> 
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        {/* <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  </> 
  )
}

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const projectData = await getProjectData(params.id);
  
    return {
      props: {
        projectData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  console.log('paths', paths)
  return {
    paths,
    fallback: false,
  };
}