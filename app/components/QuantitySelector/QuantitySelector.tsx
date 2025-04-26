import "./QuantitySelector.css";

export default function QuantitySelector() {
  return (
    <div className="quantity-container">
      <div className="quantity-controls">
        <button
          type="button"
          id="decrement-button"
          data-input-counter-decrement="counter-input"
          className="quantity-button"
        >
          <i className="bi bi-dash quantity-icon"></i>
        </button>

        <input
          type="text"
          id="counter-input"
          data-input-counter
          className="quantity-input"
          value="12"
          required
        />

        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="counter-input"
          className="quantity-button"
        >
          <i className="bi bi-plus quantity-icon"></i>
        </button>
      </div>
    </div>
  );
}
