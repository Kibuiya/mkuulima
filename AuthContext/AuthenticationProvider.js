import React, {createContext,  useState} from 'react';

// global object to hold user auth state
const AuthContext = createContext({
    user:'',
    setUser: ()=>{},
});

// global provider for the user auth state
// pass the values to every child  !important
const AuthProvider = ({children}) => {
    // a better naming way to remove monotony
    const [user, setUser]  = useState(null);
     const authValues =  {
         user,
         setUser,
     }


    return(
<AuthContext.Provider values={authValues}>
    {children}
</AuthContext.Provider>
    )
};

export {AuthProvider, AuthContext}