/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function LetterItem(props) {

	function onClickHandler() {
		props.onLetterClickHandler(props.letter)
	}
  return (
    <li
      css={css`
        display: inline;
        margin: 0 15px;
		text-transform: uppercase;
		font-size: 24px;

		&:hover {
			cursor: pointer;
		  }
      `}
	  onClick={onClickHandler}
    >
      <b>{props.letter}</b>
    </li>
  );
}

export default LetterItem;
