import styles from '../styles/Home.module.css'
import Nav from './Nav.js'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>

    )
}

export default Layout