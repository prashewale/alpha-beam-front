import React from "react";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

interface AuthGuardProps {
  redirectPath?: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ redirectPath }) => {
  return <AuthOutlet fallbackPath="/login" />;
};

export default AuthGuard;
