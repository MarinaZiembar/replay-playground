import react, {useContext} from 'react';
import styles from './HelpModal.module.css';


function HelpModal (props) {

    const {helpModalTitle, helpModalContent, handleHelpModal} = props;

    return(
        <div className={styles.helpBackdrop}>
            <div className={styles.helpContainer}>
                <div className={styles.closeHelp} onClick={() => handleHelpModal(false)}>×</div>
                <h3 className={styles.helpTitle}>{helpModalTitle}</h3>
                <div className={styles.contentContainer}>
                    {
                        helpModalContent.map((faq,i) => (
                            <div key={i} className={styles.questionContainer}>
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HelpModal;