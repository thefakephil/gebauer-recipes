import Link from "next/link";
import Nav from '../../components/nav'
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function About() {
    return (
        <>
        <Nav /> 
        <Layout home>
          <Head>
            <title>Phil G - About</title>
          </Head>
          <hr/> 
          <section className={utilStyles.headingMd}>
            <p>
            A collection of Recipes. More to come.
            </p>
            {/* <ul> 
              <li> • stuff </li>
              <li> • stuff </li>
              <li> • stuff </li>  
            </ul>  */}
          </section>
    
          <hr/>
        </Layout>
      </>
      )
}