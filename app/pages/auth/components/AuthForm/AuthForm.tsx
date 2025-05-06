import "./AuthForm.css";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface AuthFormProps {
    type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
    const isLogin = type === "login";
    const { translations } = useLanguage();
    const data = translations.authPage.authForm;

    return (
        <form className="auth-form" action="#">
            <div>
                <label htmlFor="email" className="auth-label">
                    {data.emailLabel}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={data.emailPlaceholder}
                    className="auth-input"
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="auth-label">
                    {data.passwordLabel}
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder={data.passwordPlaceholder}
                    className="auth-input"
                    required
                />
            </div>

            {!isLogin && (
                <div>
                    <label htmlFor="confirm-password" className="auth-label">
                        {data.confirmPasswordLabel}
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirmPassword"
                        placeholder={data.confirmPasswordPlaceholder}
                        className="auth-input"
                        required
                    />
                </div>
            )}

            {isLogin && (
                <div className="auth-options">
                    <div className="auth-checkbox-wrapper">
                        <input id="remember" type="checkbox" className="auth-checkbox" />
                        <label htmlFor="remember" className="auth-checkbox-label">
                            {data.rememberMe}
                        </label>
                    </div>
                    <a href="#" className="auth-forgot-link">
                        {data.forgotPassword}
                    </a>
                </div>
            )}

            <button type="submit" className="auth-button">
                {isLogin ? data.loginButton : data.registerButton}
            </button>

            <p className="auth-register-prompt">
                {isLogin ? (
                    <>
                        {data.noAccountPrompt}{" "}
                        <a href="/pages/auth/register" className="auth-register-link">
                            {data.registerLink}
                        </a>
                    </>
                ) : (
                    <>
                        {data.hasAccountPrompt}{" "}
                        <a href="/pages/auth/login" className="auth-register-link">
                            {data.loginLink}
                        </a>
                    </>
                )}
            </p>
        </form>
    );
}
