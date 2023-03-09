import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Radchuk-Store</span>
        <ul className="nav">
          <li>Товари</li>
          <li>Контакти</li>
          <li>Про нас</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
