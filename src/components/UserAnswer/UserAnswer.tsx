import React from 'react';
import UserInput from './UserInput';
import SubmitUserAnswerButton from './SubmitUserAnswerButton';
import styles from './UserAnswer.module.css';

const UserAnswer: React.FC = () => {

    return (
        <div className={styles.UserAnswerBox}>
            <UserInput />
            <SubmitUserAnswerButton />
        </div>
    );
}

export default UserAnswer;