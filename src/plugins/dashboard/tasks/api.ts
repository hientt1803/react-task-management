import { authStore } from "@/stores/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { getRecoil, setRecoil } from "recoil-nexus";
import { listTaskState } from "./taskstore";
import { API_URL } from "@/utils";

interface ITask {
  title: string;
  description: string;
}

function getListTask() {
  const profileUser = getRecoil(authStore);
  axios
    .get(`${API_URL}api/users/2/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response.data.result);
      setRecoil(listTaskState, response.data.result);
    })
    .catch((error) => console.error("Error fetching data: ", error));
}

function createTask(task: ITask) {
  const profileUser = getRecoil(authStore);
  axios
    .post(`${API_URL}todos/user/${profileUser?.id}`, task)
    .then((response) => {
      if (response.status === 201) {
        toast.success("Task created successfully");
        getListTask();
      } else {
        toast.error("Failed to create task");
      }
    });
}

function deleteTask(taskId: number) {
  const profileUser = getRecoil(authStore);
  axios
    .delete(`${API_URL}todos/user/${profileUser?.id}/${taskId}`)
    .then((response) => {
      if (response.status === 204) {
        toast.success("Task deleted successfully");
        getListTask();
      } else {
        toast.error("Failed to delete task");
      }
    });
}
export { createTask, deleteTask, getListTask };
