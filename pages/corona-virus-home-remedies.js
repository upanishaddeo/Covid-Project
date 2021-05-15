import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const coronaVirusHomeRemedies = () => {
    return (
        <>
        <Row className={styles.mainRowMargin}>
            <Col md={6} className={styles.firstcol}>
                <img className={styles.covidImageBack} src="/covidVirusBack.png" />
                
                <h1>HERO HEADING</h1>
                <p>Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                </p>
                <div className={styles.searchDiv}>Search here for any COVID-19 related issues <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>

            </Col>
            <Col md={6} className={styles.seccol}>
               <img src="/art1@3x.png" />
               <img className={styles.covidImageBack2} src="/covidVirusBack.png" />
            </Col>
        </Row> 
        <Row className={styles.secPageMargin}>
                <div className="d-none d-lg-block divRow">
                    <Col md={6} className={styles.secRowFirstCol}>
                        <img src="/second.png" />
                    </Col>
                </div>
                <Col md={6} className={styles.secRowSecCol}>
                    <h1>HERO HEADING</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                </p>
                    <div className={styles.applyDiv}>APPLY</div>
                    <img className={styles.covidImageBack3} src="/covidVirusBack.png" />
                </Col>
                < div className="d-lg-none ">
                    <Col md={6} className={styles.secRowFirstCol}>
                        <img src="/second.png" />
                    </Col>
                </div>


            </Row>
        </>
    )
}

export default coronaVirusHomeRemedies