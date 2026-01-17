import { useCallback, useState } from "react";

interface IUseService<T> {
  data: T | undefined;
  loading: boolean;
  error: string | undefined;
  fetch: (service: () => Promise<T>) => Promise<T | undefined>;
}

export const useService = <T>(initialData?: T): IUseService<T> => {
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const fetch = useCallback(async (service: () => Promise<T>) => {
    try {
      setLoading(true);
      setError(undefined);

      const result: T = await service();
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    fetch,
  };
};

export default useService;
