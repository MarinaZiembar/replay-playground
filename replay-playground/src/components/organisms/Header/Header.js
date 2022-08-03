import React, {useContext} from 'react';
import styles from './Header.module.css';
import Switch from "react-switch";
import argflag from '../../../images/esp.png';
import usaflag from '../../../images/eng.png';
import {LanguageContext} from '../../../contexts/LanguageContext';



function Header (props) {

    const {title, subtitle} = props;
    const { isDefaultLanguage, setIsDefaultLanguage } = useContext(LanguageContext);

    return(
        <header className={styles.header}>
            <div>
                <img src="" alt="logo" />
                <p><span>{title}</span> {subtitle}</p>
            </div>
            <div>
                
                <Switch
                    onChange = {() => setIsDefaultLanguage(!isDefaultLanguage)}
                    checked = {isDefaultLanguage}
                    onColor = "#577590"
                    checkedIcon = {<img src={argflag} width="15" alt="Español" style={{marginTop:6, marginLeft:8}}/>}
                    offColor = "#F94144"
                    uncheckedIcon = {<img src={usaflag} width="15" alt="Ingles" style={{marginTop:6, marginLeft:8}}/>}
                />
            </div>
        </header>
    )
}

export default Header;