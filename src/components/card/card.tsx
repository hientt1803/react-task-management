import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import TaskDeleteDialog from "@/plugins/dashboard/tasks/components/dialog-delete";
import { modalDeleteState } from "@/plugins/dashboard/tasks/taskstore";
import { TASK_STATUS } from "@/types/task-enum";
import { EllipsisVertical, FileIcon, Trash2Icon } from "lucide-react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ITask {
  id: number;
  title: string;
  content: string;
  status: TASK_STATUS;
}

const CardTask = (props: ITask) => {
  // recoil
  const setModalDelete = useSetRecoilState(modalDeleteState);
  const modalDelete = useRecoilValue(modalDeleteState);

  const handleOpenModalDelete = () => {
    setModalDelete(true);
  };

  const handleMoveToTrash = () => {
    setModalDelete(true);
  };

  const handleEditTask = () => {
    setModalDelete(true);
  };

  return (
    <>
      <Card className="min-h-[230px] rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium line-clamp-1">
            {props.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleEditTask}>
                Update Task
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleMoveToTrash}>
                Move to trash
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenModalDelete}>
                Delete Task
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start gap-3">
          <div className="text-sm text-neutral-200 line-clamp-3 mb-auto">
            {props.content}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-start w-full mt-auto">
            <div>456</div>
            <div className="flex items-end justify-between w-full">
              <Badge variant="default" className={cn("self-end mt-5")}>
                {props.status}
              </Badge>
              <div className="flex gap-3">
                <FileIcon className="cursor-pointer" />
                <Trash2Icon
                  className="cursor-pointer"
                  onClick={handleOpenModalDelete}
                />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>

      {modalDelete && <TaskDeleteDialog />}
    </>
  );
};

export default CardTask;
