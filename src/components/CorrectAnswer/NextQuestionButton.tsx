import React, { useContext } from 'react';
import styles from './CorrectAnswer.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

type QuestionAndAnswerType = {
    'primary_key': number,
    'question': string,
    'question_category': string,
    'answer': string,
    'answer_info': string
}

const NextQuestionButton: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionAndAnswer, setCurrentQuestionAndAnswer,
        setUserInput, setDisplayCorrectAnswer } = QandAContextValue;

    const getNewQuestionAndAnswer = () => {
        // const url = '/get_new_question'
        const url = 'http://127.0.0.1:5000/get_new_question'
        const requestData = {
            new_primary_key: currentQuestionAndAnswer['primary_key'] + 1
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then((data: QuestionAndAnswerType) => {
            setCurrentQuestionAndAnswer(data);
            {console.log(data)}
        })
        .catch(error => console.log('Add quiz user answer request error:', error));
    };

    const handleNewQuestion = () => {
        getNewQuestionAndAnswer();
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