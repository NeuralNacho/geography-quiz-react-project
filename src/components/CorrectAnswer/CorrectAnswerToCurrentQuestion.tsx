import React, { useContext } from "react";
import styles from './CorrectAnswer.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

const CorrectAnswerToCurrentQuestion: React.FC = () => {
    // Will show if user answer is correct and then display the current question

    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionAndAnswer, userInput } = QandAContextValue;

    const correctAnswerToCurrentQuestion = currentQuestionAndAnswer['answer'];

    let IsAnswerCorrectText: string = 'Incorrect.';
    if (userInput === correctAnswerToCurrentQuestion) {
        IsAnswerCorrectText = 'Correct!';
    }

    return (
        <div className={styles.CorrectAnswerToCurrentQuestion}>
            {IsAnswerCorrectText} The correct answer is {correctAnswerToCurrentQuestion}.
        </div>
    );
}

export default CorrectAnswerToCurrentQuestion;