export interface AuthDetails {

}

export default interface AuthResponse {
    id: string;
    accessToken: string;
    refreshToken: string;
    errorMessage: string;
};