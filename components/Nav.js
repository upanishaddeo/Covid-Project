import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.afinozLogo}>
                <Link href='/'><Image src='/afinoz_logo.svg' width={150} height={90}  /></Link>
            </div>
            <ul>
                <li>
                    <Link href='/corona-virus-home-remedies'>Corona Virus Home Remedies</Link>
                </li>
                <li>
                    <Link href='/rt-pcr'>RT-PCR</Link> <FontAwesomeIcon className={styles.iconColor} icon={faAngleDown}></FontAwesomeIcon>
                </li>
                <li>
                    <Link href='/Plasma'>Plasma</Link> <FontAwesomeIcon className={styles.iconColor} icon={faAngleDown}></FontAwesomeIcon>
                </li>
                <li>
                    <Link href='/oxygen'>Oxygen</Link> <FontAwesomeIcon className={styles.iconColor} icon={faAngleDown}></FontAwesomeIcon>
                </li>
                <li>
                    <Link href='/Covid-19-admission'>Covid-19 Admission</Link> <FontAwesomeIcon className={styles.iconColor} icon={faAngleDown}></FontAwesomeIcon>
                </li>
            </ul>
        </nav>
    )
}

export default Nav