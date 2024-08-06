import { toast } from 'react-toastify';
import { setRecoil } from 'recoil-nexus';
import {
    listTaskInCompleteState,
    listTaskState,
    listTaskTrashState,
} from './taskstore';
import { axiosClient } from '@/utils/axios-client';

interface ITask {
    title: string;
    description: string;
}

function getListTask() {
    axiosClient
        .get('/todos/status/IN_PROGRESS')
        .then((response) => {
            console.log(response.data.result);
            setRecoil(listTaskState, response.data.result);
        })
        .catch((error) => console.error('Error fetching data: ', error));
}

function getListTaskTrash() {
    axiosClient
        .get('/todos/status/TRASH')
        .then((response) => {
            console.log(response.data.result);
            setRecoil(listTaskTrashState, response.data.result);
        })
        .catch((error) => console.error('Error fetching data: ', error));
}

function getListTaskInComplete() {
    axiosClient
        .get('/todos/status/COMPLETED')
        .then((response) => {
            console.log(response.data.result);
            setRecoil(listTaskInCompleteState, response.data.result);
        })
        .catch((error) => console.error('Error fetching data: ', error));
}

function createTask(task: ITask) {
    axiosClient
        .post(`/todos`, task)
        .then(() => {
            toast.success('Task created successfully');
            getListTask();
        })
        .catch((error) => toast.error('Failed to create task', error));
}

function updateTask(taskId: number, task: ITask) {
    axiosClient
        .put(`/todos/${taskId}`, task)
        .then(() => {
            toast.success('Task updated successfully');
            getListTask();
        })
        .catch((error) => toast.error('Failed to update task', error));
}

function updateTaskStatus(taskId: number, status: string) {
    axiosClient
        .put(`/todos/${taskId}/status`, { status })
        .then(() => {
            toast.success('Task status updated successfully');
            getListTask();
        })
        .catch((error) => toast.error('Failed to update task status', error));
}

function deleteTask(taskId: number) {
    axiosClient
        .delete(`/todos/${taskId}`)
        .then(() => {
            toast.success('Task deleted successfully');
            getListTask();
        })
        .catch((error) => toast.error('Failed to delete task', error));
}
export {
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    getListTask,
    getListTaskTrash,
    getListTaskInComplete,
};
