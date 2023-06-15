import Image from 'next/image'
import styles from './page.module.css'
import AddForm from './components/AddForm'

export default function Home() {
  return (
    <main >
    <body className={styles.main}>
      <section>
        <h1>What do yo want to do?</h1>
        <AddForm/>
      </section>
      <section>
        <h1>Todos list</h1>
      </section>
    </body>
    </main>
  )
}
