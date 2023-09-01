import React from 'react';
import styles from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header: React.FC = () => {
    return (
        <div className={styles.Banner}>
            <div className={styles.LeftContainer}>
                <HeaderButton text='Info' />
            </div>
            <h1 className={styles.Title}>
                UNEARTH
            </h1>
            <div className={styles.RightContainer}>
                <HeaderButton text='Stats'/>
                <HeaderButton text='Login'/>
            </div>
        </div>
    );
}

export default Header;