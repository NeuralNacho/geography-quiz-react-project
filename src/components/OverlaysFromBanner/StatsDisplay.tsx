import React, { useContext } from "react";
import styles from './StatsDisplay.module.css';
import { UserLoginContext } from "../UserLoginContext";
import { BannerContext } from "../BannerContext";

type UserAnswer = {
    question: string;
    correctAnswer: string;
    userAnswer: string;
    isAnswerCorrect: boolean;
}

type AnswerHistoryType = UserAnswer[]

const StatsDisplay: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    const UserLoginValues = useContext(UserLoginContext);
    if (!BannerContextValues || !UserLoginValues) {
        return null;
    }
    const { setStatsDisplayOpen } = BannerContextValues;
    const { currentUserAccessToken } = UserLoginValues;

    const handleCloseClick = () => {
        setStatsDisplayOpen(false);
    };

    const getUserAnswerHistoryFromBackend = () => {
        const url = 'http://127.0.0.1:5000/get_quiz_user_history'
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentUserAccessToken}`, // Include the JWT token in the headers
            }
        })
        .then(response => response.json())
        .then((data: AnswerHistoryType) => handleAnswerHistory(data))
        .catch(error => console.log('Add quiz user answer request error:', error));
    }

    const handleAnswerHistory = (data: AnswerHistoryType) => {
        console.log(data);
    }

    if (currentUserAccessToken !== '') {
        getUserAnswerHistoryFromBackend();
    }

    return (
        <div className={styles.Overlay}>
            <div className={styles.StatsContainer}>
                <button className={styles.CloseButton} onClick={handleCloseClick}>
                    X
                </button>
                <div className={styles.NoCorrectAnswers}> 
                    Correct Answers = ... , Total Answers = ...
                </div>
                <div className={styles.AnswerHistory}> 
                    Answer History 
                </div>
            </div>
        </div>
    );
}

export default StatsDisplay;