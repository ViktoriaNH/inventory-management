import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/search?query=${text}`);
  };

  return (
    <>
      <div className="d-flex me-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          autoComplete="off"
          value={text}
          onChange={handleTextChange}
        />

        <Button text="Search" onClick={handleSearchClick} />
      </div>
    </>
  );
};
