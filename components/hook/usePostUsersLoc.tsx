"use client";
import { useMutation } from "@tanstack/react-query";
import { Axios } from "../../api/axios";
export default function usePostUsersLoc() {
  const mutation = useMutation({
    mutationFn: async (data: string) => {
      //나중에 api수정
      return await Axios.post("/api", data);
    },
  });

  const handleSubmit = async (address: string) => {
    console.log(address);
    await mutation.mutate(address);
  };

  return { handleSubmit, mutation };
}
