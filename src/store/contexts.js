import { createContext } from "react";

export const dataContext = createContext({
  //* States
  monitors: [],
  students: [],
  totalVotes: 0,
  
  //* Functions
  addStudentsVote: () => {},
  deleteStudentsVote: () => {},
});
