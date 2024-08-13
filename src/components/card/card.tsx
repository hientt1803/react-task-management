import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import TaskDeleteDialog from '@/plugins/dashboard/tasks/components/dialog-delete';
import {
    ITask,
    modalDeleteState,
    taskActiveState,
} from '@/plugins/dashboard/tasks/taskstore';
import { EllipsisVertical, Pencil, Trash2Icon } from 'lucide-react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { EllipsisVertical, FileIcon, Pencil, Trash2Icon } from 'lucide-react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import Moment from 'moment';
import { updateTaskStatus } from '@/plugins/dashboard/tasks/api';

const CardTask = (props: ITask) => {
    // recoil
    
    const setModalDelete = useSetRecoilState(modalDeleteState);
    const modalDelete = useRecoilValue(modalDeleteState);
    const [activeTask, setTaskActive] = useRecoilState(taskActiveState);
    
    const handleOpenModalDelete = () => {
        setModalDelete(true);
        setTaskActive(props);
    };

    const handleMoveToTrash = () => {
        setModalDelete(true);
    };

    const handleEditTask = () => {
        setModalDelete(false);
        setTaskActive(props);
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
                        {props.description}
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col items-start w-full mt-auto">
                        <div>
                            {props.updatedAt !== null
                                ? `Updated: ${Moment(props.updatedAt).format(
                                      'dddd, MMMM Do YYYY, h:mm:ss a',
                                  )}`
                                : Moment(props.createdAt).format(
                                      'dddd, MMMM Do YYYY, h:mm:ss a',
                                  )}
                        </div>
                        <div className="flex items-end justify-between w-full">
                            {activeTask ? (
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="IN_PROGRESS">
                                            In Progress
                                        </SelectItem>
                                        <SelectItem value="COMPLETED">
                                            Completed
                                        </SelectItem>
                                        <SelectItem value="TRASH">
                                            Trash
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            ) : (
                                <Badge
                                    variant="default"
                                    className={cn('self-end mt-5')}
                                    onClick={() =>
                                        updateTaskStatus(props.id, 'COMPLETED')
                                    }
                                >
                                    {props.status}
                                </Badge>
                            )}

                            <div className="flex gap-3">
                                <Pencil
                                    className="cursor-pointer"
                                    onClick={handleEditTask}
                                />
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
