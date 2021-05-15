import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleDown, faBars} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React, { useState } from 'react'
import { SidebarData } from './sideBardata.js';

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div className="d-none d-lg-block nav-shadow">
                <nav className={styles.nav}>
                    <div className={styles.afinozLogo}>
                        <Link href='/'><Image src='/afinoz_logo.svg' width={150} height={90} /></Link>
                    </div>
                    {SidebarData.map((item, index)=> {
                            return(
                                <div>
                                <li key={index} className={styles.navText} >
                                    <Link href={item.path}>
                                        <span className={styles.spanTitle}>{item.title} {item.icon} <FontAwesomeIcon className={styles.iconColor} icon={faAngleDown} /></span> 
                                    </Link>
                                </li>
                                </div>
                            )
                        })}

                       { /* <li>
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
                       </li> */}
                </nav>
            </div>


            <div className="d-lg-none">
                <div classname={styles.navbar}>
                    <div className={styles.afinozLogo}>
                        <Link href='/'><Image src='/afinoz_logo.svg' width={150} height={90} /></Link>
                    </div>
                    <Link href="#" className={styles.menuBars}>
                        <FontAwesomeIcon className={styles.sideNav} icon={faBars} onClick={showSidebar}></FontAwesomeIcon>
                        </Link>
            
                <nav className={sidebar ? `${styles.active}` : `${styles.navMenu}`}> 
                    <ul className={styles.navMenuItems} onClick={showSidebar}>
                        {/* <li classname={styles.navbarToggle}>
                     <Link href="#" className={styles.menuBars}>
                        <FontAwesomeIcon className={styles.iconColor} icon={faTimes}></FontAwesomeIcon>
                        </Link>
                        </li> */}
                        {SidebarData.map((item, index)=> {
                            return(
                                <div className={styles.mainNav}>
                                <li key={index} className={item.cName} >
                                    <Link href={item.path}>
                                        <span className={styles.span}>{item.title}</span>
                                    </Link>
                                </li>
                                </div>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            </div>
        </>
    )
}

export default Nav