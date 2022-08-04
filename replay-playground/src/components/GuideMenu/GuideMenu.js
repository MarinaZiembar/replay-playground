import react, {useContext} from 'react';
import styles from './GuideMenu.module.css';


function GuideMenu (props) {

    const {guideTitle, guidedSubtitle, guideMenuItems, handleGuideMenu} = props;

    return(
        <div className={styles.menuBackdrop}>
            <div className={styles.menuContainer}>
                <div className={styles.closeMenu} onClick={() => handleGuideMenu(false)}>×</div>
                <h3 className={styles.menuTitle}>{guideTitle}</h3>
                <p className={styles.menuSubtitle}>{guidedSubtitle}</p>
                <div className={styles.guidesContainer}>
                    {
                        guideMenuItems.map((item,i) => (
                            <a href={item?.link} key={i} className={[styles.menuItem, !item.available && styles.disabled].join(" ")} target="_blank">
                                {item.name}
                                {!item.available && <p className={styles.upcomingTag}>Próximamente</p>}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GuideMenu;