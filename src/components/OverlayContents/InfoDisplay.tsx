import React, { useContext } from "react";
import styles from './InfoDisplay.module.css';
import { BannerContext } from "../BannerContext";

const InfoDisplay: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    if (!BannerContextValues) {
        return null;
    }
    const { setInfoDisplayOpen } = BannerContextValues;

    const handleCloseClick = () => {
        setInfoDisplayOpen(false);
    };
    return (
        <div className={styles.Overlay}>
            <div className={styles.InfoContainer}>
                <button className={styles.CloseButton} onClick={handleCloseClick}>
                    X
                </button>
                <div className={styles.InfoText}>
                    Are you ready to learn some lesser know geography facts? 
                    Make an account and start answering questions to unearth truths about
                    the globe.
                </div>
            </div>
        </div>
    );
}

export default InfoDisplay;