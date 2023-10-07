import Layout from '../../components/layout';
import { getAllRecipesIds, getRecipeData  } from '../../../lib/recipes';
import Head from 'next/head'
import Nav from '../../components/nav'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Recipe({ recipeData }) {
  return (
    <> 
    <Nav /> 
    <Layout>
      <Head>
        <title>{recipeData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{recipeData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={recipeData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
      </article>
    </Layout>
  </> 
  )
}

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const recipeData = await getRecipeData(params.id);
    return {
      props: {
        recipeData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllRecipesIds();
  return {
    paths,
    fallback: false,
  };
}