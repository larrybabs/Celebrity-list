import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Celebrities</title>
        <meta name="description" content="Celebrity list" />
      </Head>
    <div>
      
      <h1 className={styles.title}>Random User Details</h1>
      <p className={styles.text}>
        Consectetur deserunt ex laborum tempor enim nisi est. Esse non ullamco
        anim eiusmod. Officia adipisicing dolore minim nisi sunt aliquip do
        cillum pariatur fugiat. Consectetur deserunt ex laborum tempor enim nisi
        est. Esse non ullamco anim eiusmod. Officia adipisicing dolore minim
        nisi sunt aliquip do cillum pariatur fugiat.
      </p>
      <Link href="/celebs">
        <a className={styles.btn}>See Users</a>
      </Link>
     
    </div>
    </>
  )
}
