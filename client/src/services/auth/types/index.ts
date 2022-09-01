export type RegisterRequest = {
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  address: string;
  orders: string[];
  token: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};
