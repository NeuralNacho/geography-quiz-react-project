import React, { createContext, useState } from 'react';

interface UserLoginContextType {
    currentUserAccessToken: string;
    setCurrentUserAccessToken: (newUserAccessToken: string) => void;
}

const UserLoginContext = createContext<UserLoginContextType | undefined>(undefined);

interface UserLoginProviderProps {
    children: React.ReactNode; // Accepts any valid TSX content
}

const UserLoginProvider: React.FC<UserLoginProviderProps> = ({ children }) => {
    const [currentUserAccessToken, setCurrentUserAccessToken] = useState<string>('');

    const contextValue = {
        currentUserAccessToken,
        setCurrentUserAccessToken
    };
    
    return (
        <UserLoginContext.Provider value={contextValue}>
            {children}
        </UserLoginContext.Provider>
    );
}

export { UserLoginProvider, UserLoginContext };