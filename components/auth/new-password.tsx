import React from "react";
import { CardWrapper } from "./card-wrapper";

const NewPassword = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"

    >
        new pass
    </CardWrapper>
  );
};

export default NewPassword;
