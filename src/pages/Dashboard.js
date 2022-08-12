import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/LayoutComponent";
import LoadingComponent from "../components/LoadingComponent";
import TaskService from "../services/TaskService";

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const { data: taksData, isLoading: isLoadingTask, refetch: refetchUserProfile } = useQuery(["task"], () => TaskService.getAll());
  const TaskList = isLoadingTask ? [] : taksData;

  const { mutate } = useMutation((id) => TaskService.deleteTaskDetailByID(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("task");
    },
  });

  const handleDelete = async (params) => {
    mutate(parseInt(params.currentTarget.id));
  };

  return (
    <LayoutComponent pageTitle="Task Listeleme">
      {isLoadingTask && <LoadingComponent />}
      <div className="w-full mb-2 lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full p-4 rounded-lg bg-white border border-gray-100">
          <div className="flex flex-col w-full">
            <div className="overflow-x-scroll lg:overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                      ID
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                      Task
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                      Oluşturan
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                      Owner
                    </th>
                    <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {!isLoadingTask &&
                    TaskList.map((item) => (
                      <tr className="hover:bg-gray-200" key={item.id}>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">{item.id}</td>

                        <td className="flex itemxs-center p-4 mr-12 space-x-6 whitespace-nowrap lg:p-5 lg:mr-0">
                          <div className="text-sm font-normal text-gray-500">
                            <div className="text-base font-semibold text-gray-900">{item.title}</div>
                            <div className="text-sm font-normal text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {item.creator.firstName} {item.creator.lastName}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {item.owner.firstName} {item.owner.lastName}
                        </td>

                        <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                          <Link
                            to={`/task-duzenle/${item.id}`}
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                          >
                            <PencilIcon className="h-4 mr-2" />
                            Edit Task
                          </Link>
                          <span
                            onClick={handleDelete}
                            id={item.id}
                            className="inline-flex items-center cursor-pointer py-2.5 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-300 hover:text-white hover:scale-[1.02] transition-all"
                          >
                            <TrashIcon className="h-4" />
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Dashboard;
