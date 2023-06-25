import { useState, createContext, useMemo, useContext } from "react";
import PropTypes from "prop-types";

export const AuthProviderContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthProviderContext = () => {
  if (!AuthProviderContext) {
    throw Error(
      "useAuthProviderContext can only be used withing an AuthProviderContextProvider"
    );
  }
  return useContext(AuthProviderContext);
};

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("User");
  const [gravatarHash, setGravatarHash] = useState("");
  const [gitRepo, setGitRepo] = useState([]);

  const value = useMemo(
    () => ({
      email,
      setEmail,
      gravatarHash,
      setGravatarHash,
      gitRepo,
      setGitRepo
    }),
    [email,gravatarHash, setEmail, setGravatarHash, gitRepo, setGitRepo]
  );

  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
