import react, { useEffect } from 'react';
import style from './PlaygroundTemplate.module.css';
import {Container, Row, Col} from 'react-bootstrap';


function PlaygroundTemplate () {

    useEffect(() => {
        const getEl = id => document.getElementById(id)

        const iFrame = getEl('iFrame').contentWindow.document
        const htmlTextArea = getEl('htmlTextarea')
        const cssTextArea = getEl('cssTextarea')

        document.body.onkeyup = function() {
            iFrame.open()
            iFrame.writeln(
                htmlTextArea.value +
                '<style>' +
                cssTextArea.value +
                '</style>'
            )
            iFrame.close()
        }
    },[])

    

    return(
        <Container fluid className={style.playgroundContainer}>
            <Row>
                <Col className={style.codingSide}>
                    <h2>HTML</h2>
                    <textarea 
                        id="htmlTextarea" 
                        className={style.htmlContainer}
                        placeholder="Escribí tu HTML acá..."
                    >
                    </textarea>
                    <h2>CSS</h2>
                    <textarea 
                        id="cssTextarea" 
                        className={style.cssContainer}
                        placeholder="Escribí tu CSS acá..."
                    >
                    </textarea>
                </Col>
                <Col className={style.previewSide}>
                    <iframe id="iFrame" className={style.previewContainer} title="Output"></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default PlaygroundTemplate;