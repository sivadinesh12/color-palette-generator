import PaletteItem from "../PaletteItem";
import { useEffect, useState } from "react";
import "./index.css";

const randomColor = require("randomcolor");

const ColorGenerator = () => {
  const [savedColors, setSavedColors] = useState([]);
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("savedColors");
    setSavedColors(saved ? JSON.parse(saved) : []);
  }, []);

  const randomColorGenerator = () => {
    setIsGenerated(true);
    setColorPalettes([
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
    ]);
  };

  return (
    <div className="bg-container">
      <h1 style={{ textAlign: "center" }}>Color Palette Generator</h1>
      <div className="random-generator-bg">
        {isGenerated ? (
          <ul className="color-palettes-list">
            {colorPalettes.map((each) => (
              <PaletteItem
                key={each}
                randomColor={each}
                localSavedColors={savedColors || []}
                setSavedColors={setSavedColors}
                isSavedPalette={savedColors.includes(each)}
              />
            ))}
          </ul>
        ) : (
          <p>
            Click on <strong>Generate</strong> to generate color palettes
          </p>
        )}
        <button
          style={{
            height: "40px",
            width: "120px",
            backgroundColor: "rgb(18, 226, 77)",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
          onClick={randomColorGenerator}
        >
          Generate
        </button>
      </div>
      <div className="saved-palettes-bg">
        {savedColors.length === 0 ? (
          <p style={{ textAlign: "center" }}>No saved Colors</p>
        ) : (
          <ul className="saved-palettes-list">
            {savedColors.map((each) => (
              <PaletteItem
                key={each}
                randomColor={each}
                localSavedColors={savedColors }
                setSavedColors={setSavedColors}
                isSavedPalette={savedColors.includes(each)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ColorGenerator;
