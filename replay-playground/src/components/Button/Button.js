import react, {useState} from 'react';
import style from './Button.module.css';
import play from '../../images/play.svg';


function Button (props) {

    const { title, showSomething, setShowSomething} = props;


    return(
        <div className={style.buttonContainer}>
            <button 
                type="button" 
                className={style.button} 
                onClick={() => setShowSomething(!showSomething)}
            >
                {title}
            </button>
        </div>
    )
}

export default Button;