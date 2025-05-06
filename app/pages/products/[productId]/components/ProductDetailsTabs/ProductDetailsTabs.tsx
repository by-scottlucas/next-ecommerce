import './ProductDetailsTabs.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ProductDetailsTabsProps } from './models/product-details';

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
    const { translations } = useLanguage();
    const data = translations.productDetailsComponent;

    return (
        <div className="product-details-container">
            <Tabs defaultValue="specs">
                <TabsList className="tabs-list">
                    <TabsTrigger className="tab-button" value="specs">
                        {data.tabs.specs}
                    </TabsTrigger>
                    <TabsTrigger className="tab-button" value="reviews">
                        {data.tabs.reviews}
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="tabs-content">
                    <div className="tabs-box">
                        <h2 className="tabs-title">
                            {data.titles.technicalSpecifications}
                        </h2>
                        <div className="specs-grid">
                            {product.specs?.map((spec, index) => (
                                <div
                                    key={index}
                                    className={`spec-item ${index < product.specs!.length - 1 ? "spec-item-bordered" : ""}`}
                                >
                                    <div className="spec-line">
                                        <span className="spec-label">{spec.label}</span>
                                        <span className="spec-value">{spec.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="reviews">
                    <div className="tabs-placeholder">
                        <p className="tabs-placeholder-text">
                            {data.placeholders.reviews}
                        </p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
