export interface Credentials {
  email: string;
  password: string;
}

export interface UserData {
  user: User;
  access_token: string;
}

export interface User {
  name: string;
  last_name: string;
  username: string;
  email: string;
  birth_date: Date;
  role: Role;
}

export interface Role {
  id: number;
  name: string;
  description: string;
}
