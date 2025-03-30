import { UserModel } from '../model/userModel.js';
import { AuthView } from '../view/authView.js';

export class AuthController {
    constructor() {
        this.model = new UserModel();
        this.view = new AuthView();
    }

    initSignUpPage() {
        console.log('[AUTH] Sign Up controller запущен');
        this.view.onSignUp((data) => {
            if (data.password !== data.confirmPassword) {
                this.view.showError("Passwords do not match");
                return;
            }

            const success = this.model.addUser(data.email, {
                name: data.name,
                surname: data.surname,
                nickname: data.nickname,
                dob: data.dob,
                password: data.password
            });

            if (!success) {
                this.view.showError("User already exists");
                return;
            }

            this.model.setCurrentUser(data.email);
            window.location.href = 'index.html';
        });
    }

    initSignInPage() {
        this.view.onSignIn((login, password) => {
            const email = this.model.authenticate(login, password);
            if (email) {
                this.model.setCurrentUser(email);
                window.location.href = 'index.html';
            } else {
                this.view.showError("Invalid credentials");
            }
        });
    }
}
