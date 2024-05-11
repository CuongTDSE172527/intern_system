import * as React from "react";
import Header from "../../components/header/Header.jsx";

function PasswordInput({ id, label, placeholder }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <div className="password-input">
                <input
                    type={showPassword ? "text" : "password"}
                    id={id}
                    className="form-input"
                    placeholder={placeholder}
                />
                <button type="button" onClick={togglePasswordVisibility} className="password-toggle">
                    <img
                        loading="lazy"
                        src={showPassword ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9a430ca68c2ccd8b1e30a10a2ac019f4eefc1a42d0fd421868d69fe6c8a77?apiKey=41832340d6f545c2a0509736ad9e1693&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/7f25cc562de1734d7742871f2b6003da99de195f35d274b5e615cdcdad931bae?apiKey=41832340d6f545c2a0509736ad9e1693&"}
                        alt="Password visibility toggle"
                    />
                </button>
            </div>
        </>
    );
}

function ChangePasswordForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form className="change-password-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Change Password</h1>
            <PasswordInput id="newPassword" label="New Password *" placeholder="••••••••" />
            <PasswordInput id="confirmPassword" label="Confirm New Password*" placeholder="Re-enter your password" />
            <button type="submit" className="submit-button">
                Change Password
            </button>
        </form>
    );
}

function MyPass() {
    return (
        <>
            <div className="container">
                <Header />
                <main className="main-content">
                    <div className="content-wrapper">
                        <div className="form-column">
                            <ChangePasswordForm />
                        </div>
                        <div className="image-column">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/769194cc6b501f03568e57e28b6c0656e834e905ae2d3de0cdbbcf291c9e53b3?apiKey=41832340d6f545c2a0509736ad9e1693&" alt="Decorative illustration" className="illustration" />
                        </div>
                    </div>
                </main>
            </div>
            
        </>
    );
}

export default MyPass;