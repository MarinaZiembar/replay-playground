import react, {useContext, useState} from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GuideMenu from '../components/GuideMenu/GuideMenu';
import HelpModal from '../components/HelpModal/HelpModal';
import PlaygroundTemplate from '../components/PlaygroundTemplate/PlaygroundTemplate';
import {LanguageContext} from '../contexts/LanguageContext';


function Playground () {

    const { languagePack } = useContext(LanguageContext);
    
    const [showMenu, setShowMenu] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    return(
        <div className="playground">
            <Header
                title={languagePack.header.title}
                subtitle={languagePack.header.subtitle}
                guideMenuButtonTitle={languagePack.header.guideMenu.buttonTitle}
                guideMenuButtonHandler={setShowMenu}
                helpModalButtonTitle={languagePack.header.helpModal.buttonTitle}
                helpModalButtonHandler={setShowHelp}
            />
            <PlaygroundTemplate/>
            {showMenu && 
                <GuideMenu
                    guideTitle={languagePack.header.guideMenu.modalTitle} 
                    guidedSubtitle={languagePack.header.guideMenu.modalSubtitle}
                    guideMenuItems={languagePack.header.guideMenu.menuItems}
                    handleGuideMenu={setShowMenu}
                />
            }
            {showHelp && 
                <HelpModal
                    helpModalTitle={languagePack.header.helpModal.title}
                    helpModalContent={languagePack.header.helpModal.content}
                    handleHelpModal={setShowHelp}
                />
            }
            <Footer
                copyright={languagePack.footer.copyright}
                rrss={languagePack.footer.rrss}
            />
        </div>
    )
}

export default Playground;