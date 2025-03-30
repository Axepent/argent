export class UserModel {
    constructor() {
        this.usersKey = 'users';
        this.currentKey = 'currentUserEmail';
        this.users = JSON.parse(localStorage.getItem(this.usersKey)) || {};
    }

    addUser(email, data) {
        if (this.users[email]) return false;
        this.users[email] = data;
        this._save();
        return true;
    }

    authenticate(login, password) {
        for (let email in this.users) {
            const user = this.users[email];
            if ((email === login || user.nickname === login) && user.password === password) {
                return email;
            }
        }
        return null;
    }

    getCurrentUser() {
        const email = localStorage.getItem(this.currentKey);
        if (!email || !this.users[email]) return null;
    
        return {
            email,
            ...this.users[email]
        };
    }
    
    

    setCurrentUser(email) {
        localStorage.setItem(this.currentKey, email);
    }

    logout() {
        localStorage.removeItem(this.currentKey);
    }

    _save() {
        localStorage.setItem(this.usersKey, JSON.stringify(this.users));
    }
}
