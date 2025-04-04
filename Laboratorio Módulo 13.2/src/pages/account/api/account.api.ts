import Axios from "axios";

export interface CreateAccount {
  type: string;
  name: string;
}

const baseUrl = "http://localhost:3000/account-list";

export const saveAccount = (account: CreateAccount): Promise<void> =>
  Axios.post(baseUrl, account).then();
