import { Color } from '@/app/models/Product';

export interface ColorSelectorProps {
    colors: Color[];
    selectedColor: Color | null;
    onColorSelect: (color: Color) => void;
}