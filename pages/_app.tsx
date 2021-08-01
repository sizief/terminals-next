import '../styles/globals.css'
import Layout from '../components/common/layout'

export default function MyApp({ Component, pageProps }) {
  if (Component.layout) {
    return (
      Component.layout(
        <Component {...pageProps} />
      )
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  
}
