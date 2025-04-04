import React from "react";
import {
  Credentials,
  CredentialsformErrors,
  createEmptyCredentials,
  createEmptyCredentialsformErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import styles from "./login-form.component.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = ({ onLogin }) => {
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsformErrors>(
    createEmptyCredentialsformErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <input
              type="text"
              id="username"
              name="user"
              onChange={handleFieldChange}
              className={errors.user ? styles["input-error"] : ""}
              placeholder="Usuario"
            />
            {errors.user && <p className={styles.error}>{errors.user}</p>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleFieldChange}
              className={errors.password ? styles["input-error"] : ""}
              placeholder="Contraseña"
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <button type="submit" className={styles["btn-enviar"]}>
          Acceder
          </button>
        </form>
      </div>
    </div>
  );
};
