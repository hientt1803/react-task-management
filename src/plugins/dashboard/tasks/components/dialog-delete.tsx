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
import { modalDeleteState } from "../taskstore";

const TaskDeleteDialog = () => {
  const modalDelete = useRecoilValue(modalDeleteState);
  const setModalDelete = useSetRecoilState(modalDeleteState);

  const handleCloseModalDelete = () => {
    setModalDelete(false);
  };

  const handleDeleteTask = () => {
    // deleteTask(props.id);
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