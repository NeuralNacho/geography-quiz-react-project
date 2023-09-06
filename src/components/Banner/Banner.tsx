import React, { useContext } from 'react';
import styles from './Banner.module.css';
import { BannerContext } from '../BannerContext';

const Banner: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    if (!BannerContextValues) {
        return null;
    }
    const { setInfoDisplayOpen, setStatsDisplayOpen, setLoginDisplayOpen, usernameToDisplay } = BannerContextValues;

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
                {usernameToDisplay !== '' ? <div className={styles.UserStatusContainer}>
                    <span className={styles.GreenDot}></span>
                    <span className={styles.Username}> {usernameToDisplay} </span>
                </div> : null}
            </div>
        </div>
    );
}

export default Banner;