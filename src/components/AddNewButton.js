/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useHistory } from "react-router-dom";



function AddNewButton(props) {
  const history = useHistory();

  function handleOnClick() {
    history.push("/new-contact");
  }

  return (
    <div
      css={css`
        background-color: #e60000;
        color: #ffffff;
        width: 60px;
        height: 60px;
        position: fixed;
        border-radius: 50%;
        right: 30px;
        bottom: 75px;
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        transition: 0.3s;
        &:hover {
          transform: scale(1.2);
          cursor: pointer;®
        }
      `}
      onClick={handleOnClick}
    >
      +
    </div>
  );
}

export default AddNewButton;
