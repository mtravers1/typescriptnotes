import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>typescriptnotes</title>
        <script src="https://gist.github.com/mtravers1/00cfbc635dee661b325f7edad8940646.js"></script>
        <meta name="description" content="typescriptnotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <body>
      <input type="number" id="num1" placeholder='number1'/>
      <input type="number" id="num1" placeholder='number1'/>
      <button>add</button>

     </body>
    </div>
  )
}
