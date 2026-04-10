import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const TagInput = ({ name }) => {
  const { control } = useFormContext();
  const [text, setText] = useState("");

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const finalTag = text.trim().toLowerCase();

      if (finalTag !== "" && !field.value.includes(finalTag)) {
        const tags = [...field.value, finalTag];
        field.onChange(tags);
        setText("");
      }
    }
  };

  const onDelete = (field, currTag) => {
    const newTags = field.value.filter((tag) => tag !== currTag);
    field.onChange(newTags);
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
            <div className="d-flex flex-wrap gap-2">
              {field.value.map((tag) => (
                <span
                  className="badge text-bg-secondary d-flex align-items-center gap-2"
                  key={tag}
                >
                  {tag}
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Remove tag"
                    onClick={() => onDelete(field, tag)}
                  ></button>
                </span>
              ))}
              <input
                className="form-control"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, field)}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
