export type ValidationErrors = Record<string, any>;

export type UseSubmitOptions = {
  onSuccess?: (result: any) => any;
  onError?: (console: Error) => any;
};

export function useSubmit<T>(
  fetchable: () => Promise<T>,
  options: UseSubmitOptions = {}
) {
  const ValidationErrors = ref<ValidationErrors>({});
  const error = ref<Error | null>(null);
  const inProgress = ref<boolean>(false);
  const succeeded = ref<boolean | null>(null);

  async function submit() {
    inProgress.value = true;

    try {
      const data = await fetchable();
      succeeded.value = true;
      options?.onSuccess?.(data);

      return data;
    } catch (e: any) {
      error.value = e;
      succeeded.value = false;
      ValidationErrors.value = e.data;
      options?.onError?.(e);

      if (e.response?.status !== 422) throw e;
    } finally {
      inProgress.value = false;
    }
  }

  return { submit, inProgress, succeeded, ValidationErrors, error };
}
