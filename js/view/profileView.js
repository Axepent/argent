export class ProfileView {
    displayUser(user) {
        document.getElementById('profile-name').textContent = user.name || '-';
        document.getElementById('profile-surname').textContent = user.surname || '-';
        document.getElementById('profile-nickname').textContent = user.nickname || '-';
        document.getElementById('profile-dob').textContent = user.dob || '-';
        document.getElementById('profile-email').textContent = user.email || '-';
    }
}
