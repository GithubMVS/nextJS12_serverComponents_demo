import Head from 'next/head'
import Image from 'next/image'
import styles from '../pages/index.module.css'
import Link from 'next/link'

//image imports
import checkMark from '../public/homePage/checkMark.svg'

// images imports
import server_components from '../public/homePage/server_components.png'

export default function Home() {
  return (
    <div className={styles.homepage__full}>
      <section className={styles.whatsNew_single}>
        <h1 className={styles.displayNone}>Server components</h1>
        <div className={styles.whatsNew_single_explenationFull}>
          <h1 className={styles.WhatsNew_title}>Server components</h1>
          <p className={styles.WhatsNew_explenation}>React Server Components allow developers to build apps that span the server AND client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.</p>
          <ul className={styles.benefits}>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Choose how you want to render</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Improve user experience</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Less rendering on the client</li>
          </ul>
          <div className={styles.links}>
            <Link href="/demos/server_components/demo"><a className={styles.links_demo}>View demo</a></Link>
          </div>
        </div>
        <div className={styles.whatsNew__single_image}>
          <Image src={server_components} alt="server_components" />
        </div>
      </section>
    </div>
  )
}
