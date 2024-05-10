import * as React from "react";
import "./PasswordReset.css";
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

function ResetPasswordForm() {
    return (
        <form className="reset-password-form">
            <h1 className="form-title">Reset your password</h1>
            <p className="form-description">
                Please provide the email address that you used when you signed up for your account.
            </p>
            <label htmlFor="email" className="input-label">
                Email
            </label>
            <div className="input-wrapper">
                <input
                    type="email"
                    id="email"
                    placeholder="youremail@example.com"
                    className="input-field"
                    aria-label="Enter your email"
                />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bc642fc8af17f8c6afa0d9222189edfb7bd77d18ba9728c2122351ffa3385c?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Email Icon" className="input-icon" />
            </div>
            <p className="form-note">
                We will send you an email that will allow you to reset your password.
            </p>
            <button type="submit" className="reset-button">
                Reset password
            </button>
        </form>
    );
}

function MyComponent() {
    return (
        <>
            <div className="container">
                <Header />
                <main className="main-content">
                    <div className="content-wrapper">
                        <div className="form-column">
                            <ResetPasswordForm />
                        </div>
                        <div className="image-column">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/769194cc6b501f03568e57e28b6c0656e834e905ae2d3de0cdbbcf291c9e53b3?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Reset Password Illustration" className="illustration" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default MyComponent;