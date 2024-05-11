import React, { Component } from 'react';
import "./OTPVerify.css";
import Header from "../../components/header/Header.jsx";
class OTPVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: "",
            timeRemaining: 60
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                timeRemaining: prevState.timeRemaining > 0 ? prevState.timeRemaining - 1 : 0
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleVerificationCodeChange = (event) => {
        this.setState({ verificationCode: event.target.value });
    };

    handleResendOTP = () => {
        // Logic to resend OTP
        this.setState({ timeRemaining: 60 });
    };

    handleVerify = () => {
        // Logic to verify the entered OTP
        console.log("Verifying OTP:", this.state.verificationCode);
    };

    formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    render() {
        const { verificationCode, timeRemaining } = this.state;

        return (
            <div className="otp-verification-page">
                <Header/>
                <main className="main-content">
                    <div className="content-wrapper">
                        <section className="verification-section">
                            <h1 className="verification-title">OTP Verification</h1>
                            <p className="verification-description">
                                Enter the 4 digit verification code received on your Email ID.
                            </p>
                            <div className="verification-actions">
                                <input
                                    type="text"
                                    className="verification-code"
                                    value={verificationCode}
                                    onChange={this.handleVerificationCodeChange}
                                    placeholder="Verification code"
                                />
                                <button className="resend-otp" onClick={this.handleResendOTP}>
                                    Resend OTP {timeRemaining > 0 && `(${this.formatTime(timeRemaining)})`}
                                </button>
                            </div>
                            <button className="verify-button" onClick={this.handleVerify}>
                                Verify
                            </button>
                        </section>
                        <section className="image-section">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/769194cc6b501f03568e57e28b6c0656e834e905ae2d3de0cdbbcf291c9e53b3?apiKey=41832340d6f545c2a0509736ad9e1693&"
                                className="verification-image"
                                alt="Verification process illustration"
                            />
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}

export default OTPVerify;
