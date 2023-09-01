import React, { useContext } from 'react';
import styles from './Question.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

const Question: React.FC = () => {
    const QandAContextValues = useContext(QandAContext);
    if (!QandAContextValues) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionIdentifier } = QandAContextValues;

    const questions: string[] = ['What is the longest river in South America?', 
            'Which language is this: गिव में सम हिंदी', 
            'What is the population density of India? (Get within 10)']

    const currentQuestionDisplayed = questions[currentQuestionIdentifier]

    return (
        <div className={styles.QuestionBox}>
            {currentQuestionDisplayed}
        </div>
    );
}

export default Question;