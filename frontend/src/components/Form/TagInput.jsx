import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const TagInput = ({ name }) => {
  const { control } = useFormContext();
  const [text, setText] = useState("");

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tags = [...field.value, text.trim()];
      field.onChange(tags);
      setText("");
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        Add tags
      </label>
      <Controller
        name={name}
        defaultValue={[]}
        control={control}
        render={({ field }) => {
          return (
            <input
              className="form-control"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, field)}
            />
          );
        }}
      />
    </div>
  );
};
