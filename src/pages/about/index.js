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
            Hey I&lsquo;m Phil - I made this site to help me get my projects out in the open, including a few blog posts along the way. 
    
            I set a few guidelines to help to this - </p> 
            <ul> 
              <li> • Prioritize low / no code solutions to get it done ASAP (refactor later)</li>
              <li> • Post process here (as much as possible) </li>
              <li> • Fail! Fail quickly and often. But also recognize the wins along the way. </li>  
            </ul> 
          </section>
          <Link href='linkedin.com'>LinkedIn</Link>
          <hr/>
        </Layout>
      </>
      )
}