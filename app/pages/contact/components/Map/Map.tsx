import "./Map.css";
import { MapProps } from "./models/map";

const defaultAddress: string = "Avenida Costa e Silva, Boqueirão";

export default function Map({ address = defaultAddress }: MapProps) {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

    return (
        <div className="map-container">
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen={false}
                title="Localização no Mapa"
            ></iframe>
        </div>
    );
}