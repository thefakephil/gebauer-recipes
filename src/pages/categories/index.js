import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link';
import Nav from '../../components/nav'
import Date from '../../components/date';
import { getSortedRecipesData, getRecipeMetadata} from '../../../lib/recipes'
import styles from './categories.module.css';
import { useEffect, useState } from 'react';

export default function PostList({ allRecipesData, allRecipesMetadata }) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let [categories, setCategories ] = useState()
  let [filteredRecipeData, setRecipeData ] = useState(allRecipesData)

//   useEffect(() => {
//     const uniq = [...new Set(allRecipesMetadata)];
//     setCategories(uniq)
//   }, [])

//   console.log(categories, 'cats')

  return (
    <>
    <Nav /> 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <hr/> 
      <div className={styles.filterContainer}>
            {alphabet.map((letter) =>
                <a key={letter.toString()} value={letter} onClick={ event => callFilteringFunctions( allRecipesData, event.target.outerText ) }>
                     {letter.toUpperCase()} 
                </a> 
            )}=
            <br />  
            <a onClick={ () => clearFiltering() }> Clear Filter </a> 
        </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recipes</h2>
        <div className={utilStyles.headingSm}> {allRecipesMetadata} </div>
        <ul className={utilStyles.list}>
        {allRecipesMetadata.map((item) => (
          <h2> {item} </h2>
        ))}
        {filteredRecipeData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/recipes/${id}`}>{title}</Link>
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
  const allRecipesData = getSortedRecipesData()
  const allRecipesMetadata = getRecipeMetadata();
  return {
    props: {
      allRecipesData, 
      allRecipesMetadata
    }
  }
}