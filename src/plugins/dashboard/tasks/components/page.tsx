import CardTask from "@/components/card/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { createTask, getListTask } from "../api";
import { listTaskState } from "../taskstore";

export default function TaskPage() {
  // recoil
  const listTask = useRecoilValue(listTaskState);

  // state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getListTask();
  }, []);

  const hanldleCreateTask = async () => {
    const taskData = {
      title,
      description,
    };

    createTask(taskData);
  };

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="mb-5 w-full">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex justify-start flex-col items-start gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-start flex-col items-start gap-2">
              <Label htmlFor="desc">Desc</Label>
              <Textarea
                id="desc"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button className="mt-5" onClick={hanldleCreateTask}>
              Create Task
            </Button>
          </div>
          <div>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
              <div className="absolute inset-0 bg-zinc-900"></div>
              <div className="relative z-20 flex items-center text-lg font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
                TASK MANAGEMENT
              </div>
              <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                  <p className="text-lg">
                    “HELP YOU FOCUS AND TRACK YOUR PROGRESS BETTER WITH YOUR OWN
                    SCHEDULE.”
                  </p>
                  <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        {listTask.map((task) => (
          <CardTask
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            createdAt={task.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
