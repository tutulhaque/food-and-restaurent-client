import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
    
                // Update user profile with name and photoURL
                return updateProfile(user, { displayName: name, photoURL: photoURL })
                    .then(() => {
                        setLoading(false);
                        return user;
                    })
                    .catch((error) => {
                        setLoading(false);
                        throw error;
                    });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const singInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('observing current user inside UseEffect',currentUser);
            setUser(currentUser); 
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[]);
   


    const authInfo = { user, loading, createUser,singInUser,signInWithGoogle,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
