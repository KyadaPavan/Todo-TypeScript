import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFieldd = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a Task"
        className="input-box"
        value={todo}
        ref={inputRef}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input-button" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFieldd;
