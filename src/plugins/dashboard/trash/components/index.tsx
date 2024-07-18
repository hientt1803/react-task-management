import CardTask from "@/components/card/card";
import { useRecoilValue } from "recoil";
import { listTaskState } from "../../tasks/taskstore";

const TrashPageContainer = () => {
  // recoil
  const listTask = useRecoilValue(listTaskState);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        {listTask.map((task) => (
          <CardTask
            key={task.id}
            id={task.id}
            title={task.title}
            content={task.content}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TrashPageContainer;
