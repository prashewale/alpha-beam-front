import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { AuthContextType } from "../contexts/AuthProvider";

// const useAuth = () => {
//   return useContext(AuthContext);
// };

//

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default useAuth;
