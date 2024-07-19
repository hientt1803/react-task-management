import { authStore } from "@/stores/auth";
import { API_URL } from "@/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { setRecoil } from "recoil-nexus";

interface IAuth {
  username: string;
  password: string;
}

const loginApi = async (auth: IAuth) => {
  await axios
    .post(`${API_URL}api/auth/token`, auth)
    .then((res) => {
      const response = res.data;
      console.log(response.result.user);
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Login success");
        setRecoil(authStore, response.result.user);
        localStorage.setItem("token", response.result.token);
        window.location.href = "/dashboard";
      }
    })
    .catch((error) => {
      toast.error("Login failed");
      console.log(error);
    });
};

export { loginApi };
