import MainDialog from "@/components/dialog/main-dialog";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalDeleteState, taskActiveState } from "../taskstore";
import { deleteTask } from "../api";

const TaskDeleteDialog = () => {
  const modalDelete = useRecoilValue(modalDeleteState);
  const setModalDelete = useSetRecoilState(modalDeleteState);
  const getTaskActive = useRecoilValue(taskActiveState);

  const handleCloseModalDelete = () => {
    setModalDelete(false);
  };

  const handleDeleteTask = () => {
    if (getTaskActive) {
      deleteTask(getTaskActive?.id);
    }
    setModalDelete(false);
  };

  return (
    <MainDialog modalState={modalDelete}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete task?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"} onClick={handleCloseModalDelete}>
            Close
          </Button>
          <Button variant={"secondary"} onClick={handleDeleteTask}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </MainDialog>
  );
};

export default TaskDeleteDialog;
