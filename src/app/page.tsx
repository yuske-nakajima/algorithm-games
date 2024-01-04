import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
          <Image
            src="/algorithm-games.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={500}
            height={500}
            priority
          />
        </div>
    </main>
  )
}
