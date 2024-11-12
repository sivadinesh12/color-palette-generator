import "./index.css";

const PaletteItem = (props) => {
  const { randomColor, localSavedColors, setSavedColors, isSavedPalette } =
    props;

  const handleSavedColors = () => {
    if (!localSavedColors.includes(randomColor)) {
      const newSavedColors = [...localSavedColors, randomColor];
      setSavedColors(newSavedColors);
      localStorage.setItem("savedColors", JSON.stringify(newSavedColors));
    }
  };

  const handleDelete = () => {
    console.log(JSON.parse(localStorage.getItem("savedColors")));
    const filterPalettes = localSavedColors.filter(
      (each) => each !== randomColor
    );
    localStorage.setItem("savedColors", JSON.stringify(filterPalettes));
    setSavedColors(filterPalettes);
  };

  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(randomColor).then(() => {
      alert("HexCode Copied to Clipboard");
    });
  };

  return (
    <li className="palette-list-item">
      <div
        className="palette-item"
        style={{ backgroundColor: randomColor }}
        onClick={handleCopyToClipBoard}
      >
        <p className="hex" style={{ color: "#000000" }}>
          {randomColor}
        </p>
      </div>
      <button
        style={{
          backgroundColor: "#000000",
          height: "37px",
          border: "none",
          color: "#ffffff",
          borderRadius: "8px",
          width: "100%",
        }}
        onClick={handleSavedColors}
        className={`${isSavedPalette ? "hide" : ""}`}
      >
        Save
      </button>
      {isSavedPalette ? (
        <button
          style={{
            backgroundColor: "red",
            height: "37px",
            border: "none",
            borderRadius: "8px",
            color: "#ffffff",
            width: "100%",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </li>
  );
};

export default PaletteItem;
