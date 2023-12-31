import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link';
import Nav from '../../components/nav'
import Date from '../../components/date';
import { getSortedRecipesData, getRecipeMetadata} from '../../../lib/recipes'
import styles from './categories.module.css';
import { useEffect, useState } from 'react';

// export function Title({ item }) {
//   return (
//     <h2 key={item}> {item} </h2>
//   )
// }

// export function RecipeLink({ link }) {
//   return (
//     <li className={utilStyles.listItem} key={id}>
//     <Link href={`/recipes/${id}`}>{title}</Link>
//     <br />
//      </li>
//   )
// }
export default function Categories({ allRecipesData, allRecipesMetadata }) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let [list, setList ] = useState()
  let [filteredRecipeData, setRecipeData ] = useState(allRecipesData)
  let [item, setCurrentItem ] = useState('')
  let filteredList;


  // useEffect(() => {
  //   createList
  // }, [])

//   console.log(categories, 'cats')

function filterBasedOnCat(recipe) {
  let filteredRecipes = allRecipesData.filter(item => item.metaData.includes(recipe));
  filteredList = filteredRecipes;
}

  return (
    <>
    <Nav /> 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <hr/> 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recipes</h2>
        {/* <div className={utilStyles.headingSm}> {allRecipesMetadata} </div> */}
        <ul className={utilStyles.list}>
        {allRecipesMetadata.map((item) => (
          <div key={item}> 
          <h2 > {item} </h2>
          {filterBasedOnCat(item)}
          <ul> 
          {filteredList.map(({id, title, index}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link key={index} href={`/recipes/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
          </ul>
          </div> 
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