import React, { useContext } from 'react';
import styles from './Banner.module.css';
import { BannerContext } from '../BannerContext';

const Banner: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    if (!BannerContextValues) {
        return null;
    }
    const { setInfoDisplayOpen, setStatsDisplayOpen, setLoginDisplayOpen } = BannerContextValues;

    const openInfo = () => {
        setInfoDisplayOpen(true);
    }

    const openStats = () => {
        setStatsDisplayOpen(true);
    }

    const openLogin = () => {
        setLoginDisplayOpen(true);
    }

    return (
        <div className={styles.Banner}>
            <div className={styles.LeftContainer}>
                <button className={styles.BannerButton} onClick={openInfo}> Info </button>
            </div>
            <h1 className={styles.Title}>
                UNEARTH
            </h1>
            <div className={styles.RightContainer}>
                <button className={styles.BannerButton} onClick={openStats}> Stats </button>
                <button className={styles.BannerButton} onClick={openLogin}> Login </button>
            </div>
        </div>
    );
}

export default Banner;