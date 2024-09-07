import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    // Add other properties as needed
  }),
  setUser: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
};
