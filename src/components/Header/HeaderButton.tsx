import React from 'react';
import styles from './Header.module.css';

interface HeaderButtonProps {
    text: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ( {text} ) => {
    return (
        <div className={styles.HeaderButton}> {text} </div>
    );
}

export default HeaderButton
