/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { useContext } from "react";

// import ContactsContext from "../state/contacts-context";

function Footer() {
  // const contactsContext = useContext(ContactsContext);

  return (
    <div
      css={css`
        text-align: center;
        padding: 50px 0 50px 0;
        width: 100%;
      `}
    >
      All Rights Reserved _VO<b>IS</b> 2022
    </div>
  );
}

export default Footer;
