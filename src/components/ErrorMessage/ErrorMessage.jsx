import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorMessageBox}>
      <p className={css.errorMsg}>
        <span className={css.errorIcon}>&#10060;</span> <br />
        Sorry, something went wrong. Try to reload your page!
      </p>
    </div>
  );
};

export default ErrorMessage;
