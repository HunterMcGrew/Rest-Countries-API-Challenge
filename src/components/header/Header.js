import React from "react";
import "./Header.css";

function Header(props) {

    let mode;
    if (props.theme === "dark") {
        mode = "Light Mode";
    } else {
        mode = "Dark Mode";
    };
    return (

        <header className="row shadow-sm header-container" data-theme={props.theme}>
            <section className="header col-7 d-flex align-items-center" data-theme={props.theme}>
                <p className="header-text" data-theme={props.theme}>
                    Where in the world?
                </p>
            </section>
            <section className="theme-switcher col-5 d-flex justify-content-end" data-theme={props.theme}>
                <div className="theme-switcher-text-container d-flex align-items-center">
                    <p className="theme-switcher-text" data-theme={props.theme} onClick={props.switchTheme}>
                        {/* Icon Here */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width={18} height={18} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-theme={props.theme}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                        </svg>
                        {/* Light Mode || Dark Mode */}
                        <span className="header-right">{mode}</span>
                    </p>
                </div>
            </section>
        </header>

    );
};

export default Header;