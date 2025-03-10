import $api from "@http/Interceptors";
import { AxiosResponse } from 'axios';
import AccountResponse from "@models/AccountResponse";
import ImageResponse from "@models/ImageResponse";

export default class AccountService {
    static async getProflile(id: string): Promise<AxiosResponse<AccountResponse>> {
        return $api.get<AccountResponse>(`account/${id}`);
    }
    static async changeForward(id: string): Promise<AxiosResponse<AccountResponse>> {
        return $api.patch<AccountResponse>(`account/subscribe?id=${id}`);
    }
    static async addVolute(id: string, name: string): Promise<AxiosResponse<AccountResponse>> {
        return $api.post<AccountResponse>(`account/add-volute?id=${id}`, { name: name });
    }
    static async deleteVolute(id: string, name: string): Promise<AxiosResponse<AccountResponse>> {
        return $api.delete<AccountResponse>(`account/delete-volute?id=${id}`, {
            data: {
                name: name
            }
        });
    }
    static async uploadImage(file: File, id: string): Promise<AxiosResponse<ImageResponse>> {
        const formFile = new FormData(); formFile.append('file', file);
        return $api.post<ImageResponse>(`account/upload-image?id=${id}`, formFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    static async deleteImage(id: string) : Promise<AxiosResponse<ImageResponse>> {
        return $api.delete<ImageResponse>(`account/delete?id=${id}`);
    }
}