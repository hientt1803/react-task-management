import { authStore } from '@/stores/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setRecoil } from 'recoil-nexus';

interface IAuth {
    username: string;
    password: string;
}

const loginApi = async (auth: any) => {
    console.log(auth);

    await axios
        .post(`http://localhost:8080/api/auth/token`, auth)
        .then((res) => {
            const response = res.data;
            console.log(response.result.user);
            console.log(res.status);
            if (res.status === 200) {
                toast.success('Login success');
                setRecoil(authStore, response.result.user);
                localStorage.setItem('token', response.result.token);
                window.location.href = '/dashboard';
            }
        })
        .catch((error) => {
            toast.error('Login failed');
            console.log(error);
        });
};

const logoutApi = async () => {
    const token = localStorage.getItem('token');

    await axios.post(`http://localhost:8080/api/auth/logout`, { token });
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
};

export { loginApi, logoutApi };
