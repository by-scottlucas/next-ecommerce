import './CartSummary.css';
import { toast } from "sonner";
import { useCart } from '@/app/contexts/CartContext';
import { useRouter } from 'next/navigation';

export default function CartSummary() {
  const router = useRouter();
  const { totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("Obrigado pela sua compra.");
    clearCart();
    router.push('/');
  };

  const goToProducts = () => {
    router.push("/pages/products")
  }

  return (
    <div className="cart-summary-container">
      <h2 className="cart-summary-title">Resumo do Pedido</h2>

      <div className="cart-summary-content">
        <div className="cart-summary-line">
          <span className="cart-summary-label">Total de Items ({totalItems})</span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>

        <div className="cart-summary-line">
          <span className="cart-summary-label">Frete</span>
          <span className="cart-summary-free">Grátis</span>
        </div>

        <div className="cart-summary-divider" />

        <div className="cart-summary-total">
          <span>Total</span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="cart-summary-buttons">
        <button onClick={handleCheckout} className="cart-checkout-button">
          Finalizar a Compra
        </button>

        <button onClick={goToProducts} className="cart-continue-button">
          Continue Comprando
        </button>
      </div>
    </div>
  );
}
