import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

const mapAccountType = (typeId: string): string => {
  switch (typeId) {
    case "1":
    case "checking":
      return "Cuenta corriente";
    case "2":
    case "saving":
      return "Cuenta ahorro";
    case "3":
      return "Cuenta nómina";
    default:
      return typeId;
  }
};

export const mapAccountListFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm[] =>
  accountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
    type: mapAccountType(account.type),
  }));
