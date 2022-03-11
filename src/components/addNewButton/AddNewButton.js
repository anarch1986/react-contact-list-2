import { useHistory } from "react-router-dom";

import styles from "./AddNewButton.module.scss";

function AddNewButton(props) {
  const history = useHistory();

  function handleOnClick() {
    history.push("/new-contact");
  }

  return (
    <div className={styles.addNewButton} onClick={handleOnClick}>
      +
    </div>
  );
}

export default AddNewButton;
