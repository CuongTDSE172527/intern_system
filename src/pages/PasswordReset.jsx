import * as React from "react";

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

            <style jsx>{`
        .container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 20px 63px 80px;
        }

        @media (max-width: 991px) {
          .container {
            padding: 0 20px;
          }
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 20px;
          font-size: 30px;
          color: #000;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .header {
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }

        .logo {
          width: 244px;
          max-width: 100%;
          aspect-ratio: 2.94;
          object-fit: contain;
        }

        .language-selector {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: auto 0;
        }

        .language-flag {
          width: 88px;
          aspect-ratio: 2;
          object-fit: contain;
        }

        .language-text {
          font-family: Inter, sans-serif;
          margin: auto 0;
        }

        .language-dropdown {
          width: 25px;
          fill: #000;
          margin: auto 0;
          aspect-ratio: 1.67;
          object-fit: contain;
        }

        .main-content {
          align-self: center;
          margin-top: 31px;
          width: 100%;
          max-width: 1772px;
        }

        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
          }
        }

        .content-wrapper {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .form-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 38%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .form-column {
            width: 100%;
          }
        }

        .reset-password-form {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          align-items: center;
          font-size: 16px;
          font-weight: 400;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .reset-password-form {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .form-title {
          color: #4889e9;
          text-align: center;
          letter-spacing: 0.4px;
          text-transform: capitalize;
          font: 700 40px Inter, sans-serif;
        }

        .form-description {
          color: #667085;
          font-family: Inter, sans-serif;
          line-height: 150%;
          margin-top: 8px;
        }

        .input-label {
          color: #344054;
          font-family: Inter, sans-serif;
          font-weight: 500;
          margin-top: 23px;
        }

        .input-wrapper {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #d0d5dd;
          margin-top: 8px;
          width: 420px;
          max-width: 100%;
          gap: 20px;
          color: #667085;
          line-height: 150%;
          padding: 10px 4px 10px 14px;
        }

        .input-field {
          font-family: Inter, sans-serif;
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
        }

        .input-icon {
          width: 24px;
          aspect-ratio: 1;
          object-fit: contain;
        }

        .form-note {
          color: #667085;
          font-family: Inter, sans-serif;
          line-height: 150%;
          margin-top: 34px;
        }

        .reset-button {
          font-family: Inter, sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #4889e9;
          margin-top: 22px;
          width: 292px;
          max-width: 100%;
          color: #fff;
          line-height: 150%;
          padding: 12px 60px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .reset-button {
            padding: 0 20px;
          }
        }

        .image-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 62%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .image-column {
            width: 100%;
          }
        }

        .illustration {
          width: 100%;
          flex-grow: 1;
          aspect-ratio: 1.47;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .illustration {
            max-width: 100%;
            margin-top: 36px;
          }
        }
      `}</style>
        </>
    );
}

export default MyComponent;