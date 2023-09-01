import React from 'react';
import styles from './MainPage.module.css';
import Header from './Header/Header';
import Question from './Question/Question';
import UserAnswer from './UserAnswer/UserAnswer';
import CorrectAnswer from './CorrectAnswer/CorrectAnswer';
import { QandAProvider } from './QuestionAndAnswerContext';


const MainPage: React.FC = () => {

    return (
        <div className={styles.MainPage}>
            <Header />
            <main className={styles.MainContent}>
                <QandAProvider>
                    <Question />
                    <UserAnswer />
                    <CorrectAnswer />
                </QandAProvider>
            </main>
        </div>
    );
}

export default MainPage;