import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayoutComponent from "../components/LayoutComponent";
import TaskService from "../services/TaskService";
import UserService from "../services/UserService";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: false });
  const { data: userData, isLoading: isLoadingUser } = useQuery(["user"], () => UserService.getAll());
  const UserList = isLoadingUser ? [] : userData;
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const { mutate } = useMutation((data) => TaskService.createTask(data), {
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (data) => {
    const params = {
      ownerId: parseInt(data.ownerId),
      title: data.title,
      description: data.description,
    };
    mutate(params);
  };

  return (
    <LayoutComponent pageTitle="Task Ekleme">
      <div className="w-full ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 ">
            <div className="flex flex-wrap -mx-3 overflow-hidden">
              <div className="my-3 px-3 w-full overflow-hidden  lg:w-1/2 ">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 whitespace-nowrap">Kime</label>
                  <select className={`form-element  ${errors.ownerId ? "border-red-800 focus-visible:border-red-800 " : ""} `} {...register("ownerId", { required: true })}>
                    <option value="">Seçiniz</option>
                    {!isLoadingUser &&
                      UserList.map((item) => (
                        <option value={item.id}>
                          {item.firstName} {item.lastName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2 ">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 whitespace-nowrap">Task Adı</label>
                  <input type="text" className={`form-element  ${errors.title ? "border-red-800 focus-visible:border-red-800 " : ""} `} {...register("title", { required: true })} />
                </div>
              </div>
              <div className="my-3 px-3 w-full overflow-hidden lg:w-1/1 xl:w-1/1">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 whitespace-nowrap">Task Açıklaması</label>
                  <textarea type="text" className={`form-element h-40  ${errors.description ? "border-red-800 focus-visible:border-red-800 " : ""} `} {...register("description", { required: true })} />
                </div>
              </div>
              <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2 xl:w-1/6 ">
                <button className="form-button">Task Ekle</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </LayoutComponent>
  );
};

export default AddTask;
