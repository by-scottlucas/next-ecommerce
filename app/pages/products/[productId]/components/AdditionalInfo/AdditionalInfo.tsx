import "./AdditionalInfo.css";
import { Share2, Award, Truck, RotateCcw } from 'lucide-react';

export default function AdditionalInfo() {
    return (
        <div className="additional-infos-grid">
            <div className="flex items-center">
                <Truck className="additional-info-icon" />
                <span className="additional-info-label">Entrega grátis</span>
            </div>
            <div className="flex items-center">
                <RotateCcw className="additional-info-icon" />
                <span className="additional-info-label">7 dias para devolução</span>
            </div>
            <div className="flex items-center">
                <Award className="additional-info-icon" />
                <span className="additional-info-label">Garantia de 3 meses</span>
            </div>
            <div className="flex items-center">
                <Share2 className="additional-info-icon" />
                <span className="additional-info-label">Compartilhar produto</span>
            </div>
        </div>
    )
}