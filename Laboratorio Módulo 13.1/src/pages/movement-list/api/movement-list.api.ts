import Axios from "axios";
export interface MovementApi {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
  accountId: string;
}


const url = `${import.meta.env.VITE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementApi[]> =>
  Axios.get<MovementApi[]>(url, {
    params: {
      accountId,
    },
  }).then((response) => response.data);
