import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveAccount } from "./api/account.api";
import { appRoutes } from "@/core/router";
import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!type || !name) {
      setError("Debe elegir un tipo de cuenta y un alias.");
      return;
    }

    await saveAccount({ type, name });
    navigate(appRoutes.accountList);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Cuenta Bancaria</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.field}>
          <label>Tipo de cuenta:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="checking">Cuenta Corriente</option>
            <option value="saving">Cuenta Ahorro</option>
          </select>
        </div>
        <div className={classes.field}>
          <label>Alias:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {error && <p className={classes.error}>{error}</p>}
        
        <hr className={classes.separator} />
        <button type="submit" className={classes.button}>
          GUARDAR
        </button>
      </form>
    </div>
  );
  
  
};
