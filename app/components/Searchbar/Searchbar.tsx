import './Searchbar.css';

import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

interface SearchbarProps {
  setSearchTerm: (term: string) => void;
}

export default function Searchbar({ setSearchTerm }: SearchbarProps) {
  const [inputValue, setInputValue] = useState<string>("");


  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <form className="searchbar-container" onSubmit={(event) => event.preventDefault()}>
      <div className="relative">
        <div className="search-icon-box">
          <i aria-hidden="true" className="bi bi-search search-icon"></i>
        </div>
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Search for products..."
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
