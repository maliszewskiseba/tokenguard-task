import { mockMainPageData } from "./mockData";

export const simulateFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMainPageData);
      //   simulate some kind of fetch delay and returns mock data
    }, 4000);
  });
};
