import './ColorSelector.css';

interface Color {
    name: string;
    value: string;
}

interface ColorSelectorProps {
    colors: Color[];
    selectedColor: Color | null;
    onColorSelect: (color: Color) => void;
}

export default function ColorSelector({ colors, selectedColor, onColorSelect }: ColorSelectorProps) {
    return (
        <div className="selector-container">
            <h3 className="color-label">Cor</h3>
            <div className="color-grid">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => onColorSelect(color)}
                        className={`color-button ${selectedColor?.name === color.name
                            ? "color-selected"
                            : "color-unselected"
                            }`}
                        title={color.name}
                    >
                        <span
                            className="color-circle"
                            style={{ backgroundColor: color.value }}
                        />
                    </button>
                ))}
            </div>
            <p className="color-description">
                Cor selecionada: {selectedColor?.name}
            </p>
        </div>
    );
}
