/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Footer() {
  return (
    <div
      css={css`
        padding: 50px 0 50px 0;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;

        @media (max-width: 992px) {
          position: relative;
        }
      `}
    >
      <div
        css={css`
          text-align: center;
        `}
      >
        All Rights Reserved _VO<b>IS</b> 2022
      </div>
    </div>
  );
}

export default Footer;
