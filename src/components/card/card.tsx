import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TASK_STATUS } from "@/plugins/dashboard/tasks/page";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { deleteTask } from "@/plugins/dashboard/tasks/api";

interface ITask {
  id: number;
  title: string;
  content: string;
  status: TASK_STATUS;
}


const CardTask = (props: ITask) => {

  const handleDeleteTask = () => {
    deleteTask(props.id);
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium line-clamp-1">
            {props.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Update Task</DropdownMenuItem>
              <DropdownMenuItem>Move to trash</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDeleteTask}>Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start gap-3">
          <div className="text-md font-bold line-clamp-3">{props.content}</div>
          <div className="flex flex-col items-start w-full">
            <div>
              456
            </div>
            <div className="flex items-end justify-between w-full">
              <Badge variant="default" className="self-end mt-5">
                {props.status}
              </Badge>
              <div>
                edit
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      <Dialog>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardTask;
