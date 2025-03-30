export class AuthView {
    onSignUp(handler) {
        const form = document.querySelector('#signup-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    name: form.querySelector('#name')?.value,
                    surname: form.querySelector('#surname')?.value,
                    nickname: form.querySelector('#nickname')?.value,
                    dob: this.getDOB(form),
                    email: form.querySelector('#email')?.value,
                    password: form.querySelector('#password')?.value,
                    confirmPassword: form.querySelector('#confirm-password')?.value
                };
                handler(data);
            });
        }
    }

    onSignIn(handler) {
        const form = document.querySelector('#signin-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const login = form.querySelector('#floatingInput')?.value;
                const password = form.querySelector('#floatingPassword')?.value;
                handler(login, password);
            });
        }
    }

    showError(message) {
        alert(message);
    }

    getDOB(form) {
        const day = form.querySelector('#dob-day')?.value;
        const month = form.querySelector('#dob-month')?.value;
        const year = form.querySelector('#dob-year')?.value;
        return `${day} ${month} ${year}`;
    }
}
