import { useState } from "react";
import { addNewsletterEmail } from "../firebase/firestoreFuncs";

const useFirestore = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addEmail = async ({ newsletterEmail }) => {
    setIsLoading(true);
    const result = await addNewsletterEmail({ email: newsletterEmail });
    console.log({ result, email: newsletterEmail });
    setIsLoading(false);
    if (result) return "success";
    if (!result) return "error";
  };

  return {
    isLoading,
    addEmail,
  };
};

export default useFirestore;
