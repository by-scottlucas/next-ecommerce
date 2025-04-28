import "./ProductDetailsTabs.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductSpec {
    label: string;
    value: string;
}

interface ProductDetailsTabsProps {
    product: {
        specs: ProductSpec[];
    };
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
    return (
        <div className="product-details-container">
            <Tabs defaultValue="specs">
                <TabsList className="tabs-list">
                    <TabsTrigger className="tab-button" value="specs">Especificações</TabsTrigger>
                    <TabsTrigger className="tab-button" value="reviews">Avaliações</TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="tabs-content">
                    <div className="tabs-box">
                        <h2 className="tabs-title">Especificações Técnicas</h2>
                        <div className="specs-grid">
                            {product.specs.map((spec, index) => (
                                <div
                                    key={index}
                                    className={`spec-item ${index < product.specs.length - 1 ? "spec-item-bordered" : ""}`}
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
                        <p className="tabs-placeholder-text">Avaliações dos clientes serão exibidas aqui.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
