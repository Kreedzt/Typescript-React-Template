export interface LoginResData {
  access_token: string;
  expires_in: number;
  jti: string;
  license: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  userId: number;
}

export interface LoginReqData {
  username: string;
  password: string;
}
