import React, { useContext } from "react";
import styles from './CorrectAnswer.module.css';
import { QandAContext } from '../QuestionAndAnswerContext';

const InformationAboutAnswer: React.FC = () => {
    const QandAContextValue = useContext(QandAContext);
    if (!QandAContextValue) { // In the case that Context is undefined (won't happen)
        return null;
    }
    const { currentQuestionIdentifier } = QandAContextValue;

    const answerInfo: string[] = ['The Paraná River is a river in south-central South America, \
                    running through Brazil, Paraguay, and Argentina for some 4,880 kilometres.',
                    'Modern Standard Hindi commonly referred to as Hindi, is an \
                    Indo-Aryan language spoken chiefly in North India.',
                    'The population density of India is 435. This ranks 19th out \
                    of all countries in the world.']

    const informationAboutAnswer: string = answerInfo[currentQuestionIdentifier]

    return (
        <div style={{paddingBottom: '20px'}}>
            {informationAboutAnswer}
        </div>
    );
}

export default InformationAboutAnswer;