import React, {useContext} from 'react';
import styles from './Header.module.css';
import Switch from "react-switch";
import Button from '../Button/Button';
import argflag from '../../images/esp.png';
import usaflag from '../../images/eng.png';
import logo from '../../images/code.svg';
import {Container, Row, Col} from 'react-bootstrap';
import {LanguageContext} from '../../contexts/LanguageContext';



function Header (props) {

    const {title, subtitle, guideMenuButtonTitle, guideMenuButtonHandler, helpModalButtonTitle,helpModalButtonHandler} = props;
    const { isDefaultLanguage, setIsDefaultLanguage } = useContext(LanguageContext);

    return(
        <Container fluid className={styles.headerContainer}>
            <Row>
                <Col>
                    <div className={styles.header}>
                        <div className={styles.headerLogoContainer}>
                            <div className={styles.headerLogo}>
                                <img src={logo} alt="logo" />
                                <h1 className={styles.title}>{title}</h1>
                            </div>
                            <p className={styles.subtitle}>{subtitle}</p>
                        </div>
                        <div className={styles.optionsContainer}>
                            
                            <Button
                                title={guideMenuButtonTitle}
                                setShowSomething={guideMenuButtonHandler}
                            />
                            <Button
                                title={helpModalButtonTitle}
                                setShowSomething={helpModalButtonHandler}
                            />
                            <Switch
                                onChange = {() => setIsDefaultLanguage(!isDefaultLanguage)}
                                checked = {isDefaultLanguage}
                                onColor = "#577590"
                                checkedIcon = {<img src={argflag} width="15" alt="Español" style={{marginTop:2, marginLeft:8}}/>}
                                offColor = "#F94144"
                                uncheckedIcon = {<img src={usaflag} width="15" alt="Ingles" style={{marginTop:2, marginLeft:8}}/>}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;