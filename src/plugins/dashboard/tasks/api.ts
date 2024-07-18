// viết hàm get todo

import { authStore } from "@/stores/auth";
import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";
import { listTaskState } from "./taskstore";
import { Interface } from "readline";
import { toast } from "react-toastify";

// Java: utils => method => lưu cookies
// react: function => call api => lưu vào recoil

interface ITask {
  title: string;
  content: string;
}

function getListTask() {
  const profileUser = getRecoil(authStore);
  axios
    .get(`http://localhost:8080/todos/user/${profileUser?.id}`)
    .then((response) => {
      setRecoil(listTaskState, response.data);
    })
    .catch((error) => console.error("Error fetching data: ", error));
}

function createTask(task: ITask) {
  const profileUser = getRecoil(authStore);
  axios
    .post(`http://localhost:8080/todos/user/${profileUser?.id}`, task)
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
    .delete(`http://localhost:8080/todos/user/${profileUser?.id}/${taskId}`)
    .then((response) => {
      if (response.status === 204) {
        toast.success("Task deleted successfully");
        getListTask();
      } else {
        toast.error("Failed to delete task");
      }
    });
}
export { getListTask, createTask, deleteTask };

// axios
//   .get(`http://localhost:8080/todos/user/${profileUser?.id}`)
//   .then((response) => {})
//   .catch((error) => console.error("Error fetching data: ", error));
