import { UserModel } from '../model/userModel.js';
import { ProfileView } from '../view/profileView.js';

export class ProfileController {
    constructor() {
        this.model = new UserModel();
        this.view = new ProfileView();
    }

    initProfilePage() {
        const user = this.model.getCurrentUser();

        if (!user || !user.email) {
            window.location.href = 'Sign In.html';
            return;
        }

        this.view.displayUser(user);
    }
}
