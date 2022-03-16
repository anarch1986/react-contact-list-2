/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { colors } from "../theme.js";
import LetterItem from "./LetterItem";

function LetterBar(props) {
  function onLetterPickHandler(letter) {
    props.onLetterFilterHandler(letter);
  }

  return (
    <ul
      css={css`
        padding: 20px 0;
        list-style: none;
        text-align: center;
      `}
    >
      {props.contactLetters
        .filter((item, index) => props.contactLetters.indexOf(item) === index)
        .sort()
        .map((contactLetter) => (
          <LetterItem
            key={contactLetter}
            letter={contactLetter}
            onLetterClickHandler={onLetterPickHandler}
          />
        ))}
      <li
        css={css`
          margin-top: 5px;
          color: ${colors.grey};
          &:hover {
            cursor: pointer;
          }
        `}
        onClick={props.onClearFilterHandler}
      >
        All
      </li>
    </ul>
  );
}

export default LetterBar;
