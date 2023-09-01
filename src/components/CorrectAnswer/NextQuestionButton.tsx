import React, { useContext } from 'react';
import styles from './CorrectAnswer.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

const NextQuestionButton: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionIdentifier, setCurrentQuestionIdentifier, 
        setUserInput, setDisplayCorrectAnswer } = QandAContextValue;

    const handleNewQuestion = () => {
        setCurrentQuestionIdentifier(currentQuestionIdentifier + 1);
        setUserInput('');
        setDisplayCorrectAnswer(false);
    };

    return (
        <div>
            <button 
                type="submit"
                onClick={handleNewQuestion}  
                className={styles.NextQuestionButton}> 
                Next Question
            </button>
        </div>
    );
}

export default NextQuestionButton;