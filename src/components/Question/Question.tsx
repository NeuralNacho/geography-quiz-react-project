import React, { useContext } from 'react';
import styles from './Question.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

const Question: React.FC = () => {
    const QandAContextValues = useContext(QandAContext);
    if (!QandAContextValues) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionAndAnswer } = QandAContextValues;

    return (
        <div className={styles.QuestionBox}>
            {currentQuestionAndAnswer['question']}
        </div>
    );
}

export default Question;