import React, { useContext } from "react";
import styles from './StatsDisplay.module.css';
import { BannerContext } from "../BannerContext";

const StatsDisplay: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    if (!BannerContextValues) {
        return null;
    }
    const { setStatsDisplayOpen } = BannerContextValues;

    const handleCloseClick = () => {
        setStatsDisplayOpen(false);
    };
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