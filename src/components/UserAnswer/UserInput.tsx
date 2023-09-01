import React, { ChangeEvent, useContext, useState } from "react";
import styles from './UserAnswer.module.css';
import { QandAContext } from "../QuestionAndAnswerContext";

const UserInput: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { userInput, setUserInput, displayCorrectAnswer } = QandAContextValue;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    return (
        <div>
            <input  
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type answer..."
                readOnly={displayCorrectAnswer}  // If displaying then input is read only
                className={styles.InputBox}
            />
        </div>
    );

}

export default UserInput;