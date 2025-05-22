import React, { useRef } from "react";

const ThemeColorPicker = () => {
  const colorInputRef = useRef(null);
  const spinnerRef = useRef(null);

  const triggerColorInput = () => {
    colorInputRef.current.click();
  };

  const updateColor = () => {
    const selectedColor = colorInputRef.current.value;
    document.documentElement.style.setProperty("--main-color", selectedColor);

    const spinner = spinnerRef.current;
    spinner.style.borderTopColor = selectedColor;
    spinner.style.borderRightColor = selectedColor;
    spinner.style.borderBottomColor = selectedColor;
    spinner.style.borderLeftColor = selectedColor;
  };

  return (
    <>
      <input
        type="color"
        ref={colorInputRef}
        style={{ display: "none" }}
        onChange={updateColor}
      />
      <div
        ref={spinnerRef}
        onClick={triggerColorInput}
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid transparent",
          borderRadius: "50%",
          borderTopColor: "var(--main-color)",
          borderRightColor: "var(--main-color)",
          borderBottomColor: "var(--main-color)",
          borderLeftColor: "var(--main-color)",
          cursor: "pointer",
          margin: "1rem auto"
        }}
      ></div>
    </>
  );
};

export default ThemeColorPicker;
