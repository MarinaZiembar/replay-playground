import React, {useContext} from 'react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import {LanguageContext} from '../../contexts/LanguageContext';


function Home (props) {

    const { languagePack } = useContext(LanguageContext);

    return(
        <div className='home'>
            <Header
                title={languagePack.header.title}
                subtitle={languagePack.header.subtitle}
            />
            <HomeTemplate/>
            <Footer/>
        </div>
    )
}


export default Home;