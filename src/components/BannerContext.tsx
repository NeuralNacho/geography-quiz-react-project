import React, { createContext, useState } from 'react';

interface BannerContextType {
    infoDisplayOpen: boolean;
    setInfoDisplayOpen: (isOpen: boolean) => void;
    statsDisplayOpen: boolean;
    setStatsDisplayOpen: (isOpen: boolean) => void;
    loginDisplayOpen: boolean;
    setLoginDisplayOpen: (isOpen: boolean) => void;
    usernameToDisplay: string;
    setUsernameToDisplay: (newUsernameToDisplay: string) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

interface BannerProviderProps {
    children: React.ReactNode; // Accepts any valid TSX content
}

const BannerProvider: React.FC<BannerProviderProps> = ({ children }) => {
    const [infoDisplayOpen, setInfoDisplayOpen] = useState<boolean>(false);
    const [statsDisplayOpen, setStatsDisplayOpen] = useState<boolean>(false);
    const [loginDisplayOpen, setLoginDisplayOpen] = useState<boolean>(false);
    const [usernameToDisplay, setUsernameToDisplay] = useState<string>('');

    const contextValue = {
        infoDisplayOpen,
        setInfoDisplayOpen,
        statsDisplayOpen,
        setStatsDisplayOpen,
        loginDisplayOpen,
        setLoginDisplayOpen,
        usernameToDisplay,
        setUsernameToDisplay
    };
    
    return (
        <BannerContext.Provider value={contextValue}>
            {children}
        </BannerContext.Provider>
    );
}

export { BannerProvider, BannerContext };