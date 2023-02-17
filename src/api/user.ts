/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { baseUrl } from './base';

export async function Login(username: string, password: string) {
    console.log(username, password);
    const res = await axios({
        method: 'post',
        url: baseUrl + 'login',
        data: {
            username: username,
            password: password,
        },
    });

    return res;
}
