import React, {Children, createContext, useState} from "react";

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({children}) => {
    const[githubState, setGithubState] = useState({
        user: {
                login: undefined,
                name: "matheus",
                html_url: undefined,
                blog: undefined,
                company: undefined,
                location: undefined,
                followers: 0,
                following: 0,
                public_gists: 0,
                public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState,
        setGithubState,
        
    };
    
    return (
        <GithubContext.Provider value={contextValue}>
            {Children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;