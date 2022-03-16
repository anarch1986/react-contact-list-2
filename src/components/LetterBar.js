/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LetterItem from "./LetterItem";

function LetterBar(props) {

  function onLetterPickHandler(letter) {
    props.onLetterFilterHandler(letter)
  }

  return (
    <ul
      css={css`
        padding: 20px 0;
        list-style: none;
        text-align: center;
      `}
    >
      {props.contactLetters.filter((item, 
            index) => props.contactLetters.indexOf(item) === index).sort().map((contactLetter) => (
        <LetterItem key={contactLetter} letter={contactLetter} onLetterClickHandler={onLetterPickHandler}/>
      ))}
    </ul>
  );
}

export default LetterBar;
