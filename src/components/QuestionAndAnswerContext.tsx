import React, { createContext, useState, useContext } from 'react';

interface QandAContextType {
    currentQuestionIdentifier: number;
    setCurrentQuestionIdentifier: (newQuestionIdentifier: number) => void;
    userInput: string;
    setUserInput: (newUserInput: string) => void;
    displayCorrectAnswer: boolean;
    setDisplayCorrectAnswer: (displayCorrectAnswer: boolean) => void;
}

const QandAContext = createContext<QandAContextType | undefined>(undefined);

interface QandAProviderProps {
    children: React.ReactNode; // Accepts any valid TSX content
}

const QandAProvider: React.FC<QandAProviderProps> = ({ children }) => {
    const [currentQuestionIdentifier, setCurrentQuestionIdentifier] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [displayCorrectAnswer, setDisplayCorrectAnswer] = useState<boolean>(false);

    const contextValue = {
        currentQuestionIdentifier,
        setCurrentQuestionIdentifier,
        userInput,
        setUserInput,
        displayCorrectAnswer,
        setDisplayCorrectAnswer
    };
    
    return (
        <QandAContext.Provider value={contextValue}>
            {children}
        </QandAContext.Provider>
    );
}

export { QandAProvider, QandAContext };