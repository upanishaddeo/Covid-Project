import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/header.css'
import Layout from "../components/Layout/Layout"
function MyApp({ Component, pageProps }) {
  
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
