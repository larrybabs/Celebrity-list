import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Celebrities</title>
        <meta name="description" content="Celebrity list" />
      </Head>
      
      <h1 className={styles.title}>Trying something out</h1>
      <p className={styles.text}>
        Consectetur deserunt ex laborum tempor enim nisi est. Esse non ullamco
        anim eiusmod. Officia adipisicing dolore minim nisi sunt aliquip do
        cillum pariatur fugiat. Consectetur deserunt ex laborum tempor enim nisi
        est. Esse non ullamco anim eiusmod. Officia adipisicing dolore minim
        nisi sunt aliquip do cillum pariatur fugiat.
      </p>
      <Link href="/celebs">
        <a className={styles.btn}>See Celebrities list</a>
      </Link>
     
    </div>
  )
}
