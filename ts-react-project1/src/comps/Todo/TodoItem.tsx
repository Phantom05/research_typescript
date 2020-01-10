import React, { ReactElement } from "react";

interface Props {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

function TodoItem({ onRemove, onToggle, text, done }: Props) {
  return (
    <li>
      <b
        onClick={onToggle}
        style={{
          textDecoration: done ? "line-through" : "none"
        }}
      >
        {text}
      </b>
      <button 
        onClick={onRemove}
        style={{all: 'unset' , marginLeft: '0.5rem'}} 
      >[Remove]</button>
    </li>
  );
}

export default TodoItem;
