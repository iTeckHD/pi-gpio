import { Action } from "react-fetching-library";

export const requestHostInterceptor = (host: string) => {
  return () => {
    return async (action: Action) => ({
      ...action,
      endpoint: `${host}${action.endpoint}`
    });
  };
};
