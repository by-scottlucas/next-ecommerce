import './AdditionalInfo.css';

import { Award, RotateCcw, Share2, Truck } from 'lucide-react';

export default function AdditionalInfo() {
    return (
        <div className="additional-infos-grid">
            <div className="flex items-center">
                <Truck className="additional-info-icon" />
                <span className="additional-info-label">Entrega rápida</span>
            </div>
            <div className="flex items-center">
                <RotateCcw className="additional-info-icon" />
                <span className="additional-info-label">7 dias para devolução</span>
            </div>
            <div className="flex items-center">
                <Award className="additional-info-icon" />
                <span className="additional-info-label">Produto com Garantia</span>
            </div>
            <div className="flex items-center">
                <Share2 className="additional-info-icon" />
                <span className="additional-info-label">Compartilhar produto</span>
            </div>
        </div>
    )
}