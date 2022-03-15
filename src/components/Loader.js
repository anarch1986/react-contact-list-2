/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../theme.js";

function Loader() {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
        width: 200px;
        height: 200px;
        border: 10px solid ${colors.red};
        border-radius: 50%;
        border-top-color: ${colors.white};
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;

        @keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        @-webkit-keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
      `}
    ></div>
  );
}

export default Loader;
