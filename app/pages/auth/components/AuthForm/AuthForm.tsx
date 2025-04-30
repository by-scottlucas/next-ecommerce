import "./AuthForm.css";

interface AuthFormProps {
    type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
    const isLogin = type === "login";

    return (
        <form className="auth-form" action="#">
            <div>
                <label htmlFor="email" className="auth-label">Seu e-mail</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="nome@email.com"
                    className="auth-input"
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="auth-label">Sua senha</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="auth-input"
                    required
                />
            </div>

            {!isLogin && (
                <div>
                    <label htmlFor="confirm-password" className="auth-label">Confirme sua senha</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirmPassword"
                        placeholder="••••••••"
                        className="auth-input"
                        required
                    />
                </div>
            )}

            {isLogin && (
                <div className="auth-options">
                    <div className="auth-checkbox-wrapper">
                        <input id="remember" type="checkbox" className="auth-checkbox" />
                        <label htmlFor="remember" className="auth-checkbox-label">Lembre-me</label>
                    </div>
                    <a href="#" className="auth-forgot-link">Esqueceu a senha?</a>
                </div>
            )}

            <button type="submit" className="auth-button">
                {isLogin ? "Entrar" : "Cadastrar"}
            </button>

            <p className="auth-register-prompt">
                {isLogin ? (
                    <>
                        Não tem uma conta?{" "}
                        <a href="/pages/auth/register" className="auth-register-link">Cadastre-se</a>
                    </>
                ) : (
                    <>
                        Já tem uma conta?{" "}
                        <a href="/pages/auth/login" className="auth-register-link">Entrar</a>
                    </>
                )}
            </p>
        </form>
    );
}
