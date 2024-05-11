import * as React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fef8db57203c153c3c74e48930f491ad41ebc2dc7c06a9bab2ea38540e008e?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Company Logo" className="logo" />
            <div className="language-selector">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed3550ad056d60b4375fcbb86733c2b3eb54425ccccc2358fcad0c028c501dc1?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Language Flag" className="language-flag" />
                <div className="language-text">EN</div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a326793c32f80a36ac6330d1928371e514061297d7019f70fbbb44325a991a27?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Language Dropdown" className="language-dropdown" />
            </div>
        </header>
    );
}

export default Header;
