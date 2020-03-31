import React from "react";
import './search-box.style.css'

export const SearchBox = ({placeHolder, handler}) => (
    <input
        type="search"
        placeholder={placeHolder}
        onChange={handler}
    />
);