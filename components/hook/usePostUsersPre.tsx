import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export default function usePostUsersPre() {
  const mutation = useMutation({
    mutationFn: async (newTodo) => {
      return await axios.post("/todos", newTodo);
    },
  });

  return <div>{mutation.isError}</div>;
}
