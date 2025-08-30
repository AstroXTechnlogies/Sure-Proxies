import { useState } from "react";
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  signUpWithGoogle,
} from "../firebase/firestoreFuncs";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authWithEmail = async ({ email, psw }) => {
    setIsLoading(true);
    const isSuccessful = await signUpWithEmail({ email, psw });

    setIsLoading(false);

    return isSuccessful;
  };

  const authWithGoogle = async () => {
    setIsLoading(true);
    const isSuccessful = await signUpWithGoogle();

    setIsLoading(false);
    return isSuccessful;
  };

  const authSignInWithEmail = async ({ email, psw }) => {
    setIsLoading(true);
    const isSuccessful = await signInWithEmail({ email, psw });

    setIsLoading(false);

    return isSuccessful;
  };

  const authSignInWithGoogle = async () => {
    setIsLoading(true);
    const isSuccessful = await signInWithGoogle();

    setIsLoading(false);
    return isSuccessful;
  };
  return {
    isLoading,
    authWithEmail,
    authWithGoogle,
    authSignInWithEmail,
    authSignInWithGoogle,
  };
};

export default useAuth;
