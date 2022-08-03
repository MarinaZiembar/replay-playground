import react from 'react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';
import PlaygroundTemplate from '../templates/PlaygroundTemplate/PlaygroundTemplate';


function Playground () {
    return(
        <div className="playground">
            <Header/>
            <PlaygroundTemplate/>
            <Footer/>
        </div>
    )
}

export default Playground;