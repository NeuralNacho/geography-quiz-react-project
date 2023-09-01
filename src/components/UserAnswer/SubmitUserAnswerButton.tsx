import React, { useContext } from "react";
import styles from './UserAnswer.module.css';
import { QandAContext } from "../QuestionAndAnswerContext";


const SubmitUserAnswerButton: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { setDisplayCorrectAnswer } = QandAContextValue;

    const submitUserAnswer = () => {
        setDisplayCorrectAnswer(true);
    };

    return (
        <div>
            <button 
                type="submit"
                onClick={submitUserAnswer}  
                className={styles.SubmitButton}> 
                Submit 
            </button>
        </div>
    );

}

export default SubmitUserAnswerButton;