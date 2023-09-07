import jwtDecode from "jwt-decode";

interface DecodedToken {
  exp: number;
}

export const getTokenInfo = (token: unknown): boolean | undefined => {
  if (typeof token === "string") {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  }
};
