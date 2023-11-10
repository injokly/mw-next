import '@/styles/globals.css'
import '@/styles/reset.css'
import '@/styles/kbank_renew.css'
import '@/styles/m_web.css'
import '@/styles/swiper.min.css'
import '@/styles/font.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
