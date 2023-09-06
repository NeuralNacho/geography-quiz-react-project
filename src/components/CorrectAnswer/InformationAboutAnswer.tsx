import React, { useContext } from "react";
import { QandAContext } from '../QuestionAndAnswerContext';

const InformationAboutAnswer: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionAndAnswer } = QandAContextValue;

    return (
        <div style={{paddingBottom: '20px'}}>
            {currentQuestionAndAnswer['answer_info']}
        </div>
    );
}

export default InformationAboutAnswer;