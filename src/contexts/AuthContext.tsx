import { createContext } from 'react';

export interface IUser {
  email: string;
}

type AuthContextType = {
  user: IUser;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider(props: AuthContextType) {
  return <div>AuthContext</div>;
}
