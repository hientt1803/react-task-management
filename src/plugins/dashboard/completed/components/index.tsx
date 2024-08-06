import CardTask from '@/components/card/card';
import { useRecoilValue } from 'recoil';
import { listTaskInCompleteState } from '../../tasks/taskstore';
import { useEffect } from 'react';
import { getListTaskInComplete } from '../../tasks/api';

const CompletedPageContainer = () => {
    // recoil
    const listTask = useRecoilValue(listTaskInCompleteState);

    useEffect(() => {
        getListTaskInComplete();
    }, []);

    return (
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
                {listTask.map((task) => (
                    <CardTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        createdAt={task.createdAt}
                        updatedAt={task.updatedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompletedPageContainer;
