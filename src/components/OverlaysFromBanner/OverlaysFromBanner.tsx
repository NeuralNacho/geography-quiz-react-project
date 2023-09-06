import React, { useContext } from 'react';
import { BannerContext } from '../BannerContext';
import StatsDisplay from './StatsDisplay';
import LoginDisplay from './LoginDisplay';
import InfoDisplay from './InfoDisplay';

const OverlayContents: React.FC = () => {
    const BannerContextValues = useContext(BannerContext);
    if (!BannerContextValues) {
        return null;
    }
    const { infoDisplayOpen, statsDisplayOpen, loginDisplayOpen } = BannerContextValues;

    return (
        <div>
            {infoDisplayOpen && <InfoDisplay />}
            {statsDisplayOpen && <StatsDisplay />}
            {loginDisplayOpen && <LoginDisplay />}
        </div>
    );
}


export default OverlayContents;