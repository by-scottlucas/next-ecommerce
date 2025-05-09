import './CartSummary.css';

import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { formatCurrencyBRL } from '@/app/utils/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CartSummary() {
  const router = useRouter();
  const { translations } = useLanguage();
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
      <h2 className="cart-summary-title">
        {translations.cartSummaryComponent.title}
      </h2>

      <div className="cart-summary-content">
        <div className="cart-summary-line">
          <span className="cart-summary-label">
            {translations.cartSummaryComponent.totalItems} ({totalItems})
          </span>
          <span>{formatCurrencyBRL(totalPrice)}</span>
        </div>

        <div className="cart-summary-line">
          <span className="cart-summary-label">
            {translations.cartSummaryComponent.deliverLabel}
          </span>
          <span className="cart-summary-free">
            {translations.cartSummaryComponent.deliverValue}
          </span>
        </div>

        <div className="cart-summary-divider" />

        <div className="cart-summary-total">
          <span>{translations.cartSummaryComponent.totalPriceLabel}</span>
          <span>{formatCurrencyBRL(totalPrice)}</span>
        </div>
      </div>

      <div className="cart-summary-buttons">
        <button onClick={handleCheckout} className="cart-checkout-button">
          {translations.cartSummaryComponent.checkoutButton}
        </button>

        <button onClick={goToProducts} className="cart-continue-button">
          {translations.cartSummaryComponent.continueButton}
        </button>
      </div>
    </div>
  );
}
