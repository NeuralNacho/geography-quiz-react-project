import React, { createContext, useState } from 'react';

interface BannerContextType {
    infoDisplayOpen: boolean;
    setInfoDisplayOpen: (isOpen: boolean) => void;
    statsDisplayOpen: boolean;
    setStatsDisplayOpen: (isOpen: boolean) => void;
    loginDisplayOpen: boolean;
    setLoginDisplayOpen: (isOpen: boolean) => void;
    currentUserIdentifier: number;
    setCurrentUserIdentifier: (newUserIdentifier: number) => void; 
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

interface BannerProviderProps {
    children: React.ReactNode; // Accepts any valid TSX content
}

const BannerProvider: React.FC<BannerProviderProps> = ({ children }) => {
    const [infoDisplayOpen, setInfoDisplayOpen] = useState<boolean>(false);
    const [statsDisplayOpen, setStatsDisplayOpen] = useState<boolean>(false);
    const [loginDisplayOpen, setLoginDisplayOpen] = useState<boolean>(false);
    const [currentUserIdentifier, setCurrentUserIdentifier] = useState<number>(-1);
    // ^ -1 for no anonymous user

    const contextValue = {
        infoDisplayOpen,
        setInfoDisplayOpen,
        statsDisplayOpen,
        setStatsDisplayOpen,
        loginDisplayOpen,
        setLoginDisplayOpen,
        currentUserIdentifier,
        setCurrentUserIdentifier
    };
    
    return (
        <BannerContext.Provider value={contextValue}>
            {children}
        </BannerContext.Provider>
    );
}

export { BannerProvider, BannerContext };