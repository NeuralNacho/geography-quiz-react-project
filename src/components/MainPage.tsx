import React from 'react';
import styles from './MainPage.module.css';
import Banner from './Banner/Banner';
import Question from './Question/Question';
import UserAnswer from './UserAnswer/UserAnswer';
import CorrectAnswer from './CorrectAnswer/CorrectAnswer';
import OverlayContents from './OverlaysFromBanner/OverlaysFromBanner';
import { UserLoginProvider } from './UserLoginContext';
import { BannerProvider } from './BannerContext';
import { QandAProvider } from './QuestionAndAnswerContext';


const MainPage: React.FC = () => {
    return (
        <div className={styles.MainPage}>
            <UserLoginProvider>
                <BannerProvider>
                    <OverlayContents />
                    <Banner />
                </BannerProvider>
                <main className={styles.MainContent}>
                    <QandAProvider>
                        <Question />
                        <UserAnswer />
                        <CorrectAnswer />
                    </QandAProvider>
                </main>
                </UserLoginProvider>
        </div>
    );
}

export default MainPage;