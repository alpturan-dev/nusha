import { Josefin_Sans } from 'next/font/google'
import '@/styles/globals.css'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin_Sans.className}>
      <Component {...pageProps} />
    </main>
  )
}
