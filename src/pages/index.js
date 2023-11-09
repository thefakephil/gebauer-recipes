import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Nav from '../components/nav'
// import Date from '../../components/date';
import { getSortedRecipesData } from '../../lib/recipes'
// import styles from './recipes.module.css';
import { useEffect, useState } from 'react';

export default function PostList({ allRecipesData }) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let [filterBy, setFilter ] = useState()
  let [filteredRecipeData, setRecipeData ] = useState(allRecipesData)

  const filterRecipeByLetter = (arr, input) => {
    let fr = arr.filter(letter => input === letter.title.charAt(0))
    return setRecipeData(fr)
  };

  function callFilteringFunctions(allRecipeData, letter) {
    setFilter(letter)
    filterRecipeByLetter(allRecipeData, letter )
  }

  function clearFiltering() {
    setRecipeData(allRecipesData)
  }

  
  // useEffect(() => {
  //   filterRecipeByLetter(allRecipesData, filterBy)
  // }, [filterBy])

  return (
    <>
    <Nav /> 
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

      </Head>
      <hr/> 
      <div className={utilStyles.filterContainer}>
            {alphabet.map((letter) =>
                <a key={letter.toString()} value={letter} onClick={ event => callFilteringFunctions( allRecipesData, event.target.outerText ) }>
                     {letter.toUpperCase()} 
                </a> 
            )}
            <br />  
            <a onClick={ () => clearFiltering() }> Clear Filter </a> 
        </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recipes</h2>
        <ul className={utilStyles.list}>
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
    <stripe-pricing-table pricing-table-id="prctbl_1O4ZeFDjpI6bav5WvKxLOeSQ"
publishable-key="pk_live_51N05giDjpI6bav5Wp8D2nXe9ZTmJTF3ShbgcrjbvL9OVx4WSBWnm1TqfAsZgVpzTqFtUNKCStMyk6prnBg8D42HY00RN1jOBqZ">
</stripe-pricing-table>
  </>
  )
}

export async function getStaticProps() {
  const allRecipesData = getSortedRecipesData()
  return {
    props: {
      allRecipesData
    }
  }
}