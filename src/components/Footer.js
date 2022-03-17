/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";

import ContactsContext from "../state/contacts-context";

function Footer() {
  const contactsContext = useContext(ContactsContext);

  return (
    <div
      css={css`
        padding: 50px 0 50px 0;
        width: 100%;
        position: ${contactsContext.contacts.length > 12 ? "relative" : "fixed"};
        left: 0;
        bottom: 0;

        @media (max-width: 1400px) {
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
