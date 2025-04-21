import "./Searchbar.css";

export default function Searchbar() {
    return (
        <form className="searchbar-container">
            <div className="relative">
                <div className="search-icon-box">
                    <i aria-hidden="true" className="bi bi-search search-icon"></i>
                </div>
                <input
                    type="search"
                    id="search-input"
                    className="search-input"
                    placeholder="Buscar por..."
                    required
                />
            </div>
        </form>
    )
}