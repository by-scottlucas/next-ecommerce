"use client";
import { useState } from "react";
import "./QuantitySelector.css";

interface QuantitySelectorProps {
  stock: number;
  onChange?: (value: number) => void;
}

export default function QuantitySelector({ stock, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);
  const min = 1;
  const max = stock;

  const increment = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      const clamped = Math.min(Math.max(value, min), max);
      setQuantity(clamped);
      onChange?.(clamped);
    }
  };

  return (
    <div className="quantity-container">
      <div className="quantity-controls">
        <button
          type="button"
          onClick={decrement}
          className={`quantity-button ${quantity > min ? "enabled" : "disabled"}`}
          aria-label="Diminuir"
          disabled={quantity <= min}
        >
          <i className="bi bi-dash quantity-icon"></i>
        </button>

        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          className="quantity-input"
          required
          aria-label="Quantidade"
        />

        <button
          type="button"
          onClick={increment}
          className={`quantity-button ${quantity < max ? "enabled" : "disabled"}`}
          aria-label="Aumentar"
          disabled={quantity >= max}
        >
          <i className="bi bi-plus quantity-icon"></i>
        </button>
      </div>
    </div>
  );
}
