import type { UpdateUserFields } from "~/types/types";

export const useUser = () => {
  const getUsers = async (id: string) => {
    return await $jwtFetch(`/user-list/${id}`, {
      method: "GET",
    });
  };
  const updateUser = async (id: string, form: UpdateUserFields) => {
    const formData = new FormData();

    formData.append("avatar_file", form.avatar_file);
    formData.append("full_name", form.full_name);
    formData.append("bio", form.bio);
    formData.append("msisdn", form.msisdn);
    formData.append("username", form.username);

    return await $jwtFetch(`/user-update/${id}`, {
      method: "PATCH",
      body: formData,
    });
  };

  return {
    getUsers,
    updateUser,
  };
};
