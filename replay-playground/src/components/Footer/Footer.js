import react from 'react';
import style from './Footer.module.css';
import {Container, Row, Col} from 'react-bootstrap';


function Footer (props) {

    const { copyright, rrss } =props;

    return(
        <Container fluid className={style.footerContainer}>
            <Row>
                <Col>
                    <div className={style.footer}>
                        <p className={style.copyright}>{copyright}</p>
                        <div className={style.rrssContainer}>
                            {
                                rrss?.map((rs,i) => (
                                    <a href={rs.link} key={i} target="_blank">
                                        <img src={rs.icon} className={style.rrssImg} alt="icon" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;