import { Josefin_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Layout from '@/components/layout'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin_Sans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
