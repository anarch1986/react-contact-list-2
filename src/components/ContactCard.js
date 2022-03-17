/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";

import { colors } from "../theme.js";

function ContactCard(props) {
	const history = useHistory();

	function handleOnclick() {
		history.push("/details/" + props.contact.uid);
	}
  return (
    <div
      css={css`
        display: flex;
		padding: 10px;
		margin: 10px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		border-radius: 2%;
		transition: 0.3s;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      `}

	  onClick={handleOnclick}
    >
      <div>
        <img
          alt="profile-pic"
          src={props.contact.picture.large}
          css={css`
            height: 100px;
            width: 100px;
          `}
        />
      </div>
      <div
        css={css`
          padding-left: 10px;
        `}
      >
        <div
          css={css`
            text-align: left;
            font-size: 20px;
			word-break:break-all;
          `}
        >
          <b>{props.contact.name.last + ", " + props.contact.name.first}</b>
        </div>
        <div
          css={css`
            text-align: left;
            color: ${colors.grey};
			word-break:break-all;
          `}
        >
          {props.contact.email}
        </div>
        <div
          css={css`
            text-align: left;
            color: ${colors.grey};
			word-break:break-all;
          `}
        >
          {props.contact.phone}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
