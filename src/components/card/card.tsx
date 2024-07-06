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

interface ITask {
  id: number;
  title: string;
  desc: string;
  status: TASK_STATUS;
}

const CardTask = (props: ITask) => {
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
              <DropdownMenuItem>Delete Task</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="flex flex-col justify-start items-start">
          <div className="text-2xl font-bold line-clamp-3">{props.desc}</div>
          <Badge variant="default" className="self-end mt-5">
            {props.status}
          </Badge>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
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
