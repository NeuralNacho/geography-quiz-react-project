import React, { useContext } from 'react';
import styles from './CorrectAnswer.module.css';
import CorrectAnswerToCurrentQuestion from './CorrectAnswerToCurrentQuestion';
import InformationAboutAnswer from './InformationAboutAnswer';
import NextQuestionButton from './NextQuestionButton';
import { QandAContext } from '../QuestionAndAnswerContext';

const CorrectAnswer: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { displayCorrectAnswer } = QandAContextValue;

    return (
        <div className={styles.CorrectAnswerBox}>
            {displayCorrectAnswer &&
            <div>
                <CorrectAnswerToCurrentQuestion />
                <InformationAboutAnswer />
                <NextQuestionButton />
            </div>
            }
        </div>
    );
}

export default CorrectAnswer;