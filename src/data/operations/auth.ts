// POST /login and /token requests are handled by rickandmortyapi.com
// so we are mocking for demo purposes

//login
export interface LoginVars {
  email: string;
  password: string;
}

export type LoginData = {
  token: string;
};

export async function login({
  email, //eslint-disable-line
  password, //eslint-disable-line
}: LoginVars): Promise<LoginData> {
  // const { data } = await axiosInstance.post<LoginData>(`/login`, {
  //   email,
  //   password,
  // });
  return {
    token: 'mocked-token',
  };
}

//refreshToken
export type RefreshTokenData = {
  token: string;
};

export async function refreshToken(): Promise<RefreshTokenData> {
  // const { data } = await axiosInstance.get<RefreshTokenData>(`/token`);
  return {
    token: 'mocked--refreshed-token',
  };
}
