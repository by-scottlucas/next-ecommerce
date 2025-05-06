import { Spec } from "@/app/models/Product";

export interface ProductDetailsTabsProps {
    product: {
        specs?: Spec[];
    };
}