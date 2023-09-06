import React, { useContext } from "react";
import styles from './UserAnswer.module.css';
import { UserLoginContext } from "../UserLoginContext";
import { QandAContext } from "../QuestionAndAnswerContext";

const SubmitUserAnswerButton: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    const UserLoginContextValue = useContext(UserLoginContext);
    if (!QandAContextValue || !UserLoginContextValue) {
        return null;
    }
    const { currentQuestionAndAnswer, userInput, displayCorrectAnswer, setDisplayCorrectAnswer } = QandAContextValue;
    const { currentUserAccessToken } = UserLoginContextValue;

    let isAnswerCorrect: boolean = false;
    if (userInput === currentQuestionAndAnswer['answer']) {
        isAnswerCorrect = true;
    }

    const storeUserAnswerInDatabase = (userAnswer: string) => {
        // const url = '/add_quiz_user_answer'
        const url = 'http://127.0.0.1:5000/add_quiz_user_answer'
        const requestData = {
            question: currentQuestionAndAnswer['question'],
            correctAnswer: currentQuestionAndAnswer['answer'],
            userAnswer: userAnswer,
            isAnswerCorrect: isAnswerCorrect
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentUserAccessToken}`, // Include the JWT token in the headers
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .catch(error => console.log('Add quiz user answer request error:', error));
    }

    const submitUserAnswer = () => {
        if (!displayCorrectAnswer) { // Makes sure you can only submit once
            setDisplayCorrectAnswer(true);
            if (currentUserAccessToken !== '') { // Checks if a user is logged in
                storeUserAnswerInDatabase(userInput);
            }
        }
    };

    const submitButtonClass = displayCorrectAnswer ? styles.FrozenSubmitButton : styles.SubmitButton;

    return (
        <div>
            <button 
                type="submit"
                onClick={submitUserAnswer}  
                className={submitButtonClass}>
                Submit 
            </button>
        </div>
    );

}

export default SubmitUserAnswerButton;