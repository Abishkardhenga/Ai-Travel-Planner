import { createContext } from "react";

type ContextData = {
  tripData: any;
  setTripData: (data: any) => void; 
};

export const CreateTripContext = createContext<ContextData>({
  tripData: null,         
  setTripData: () => {}, 
});
