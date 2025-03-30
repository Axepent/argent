import { LessonController } from './controller/lessonController.js';
import { AuthController } from './controller/authController.js';
import { ProfileController } from './controller/profileController.js';

console.log('✅ main.js loaded');

const controller = new LessonController();
const path = decodeURIComponent(window.location.pathname);

if (path.includes('Lesson 1.html')) {
    controller.initLessonPage('lesson1');
} else if (path.includes('Lesson 2.html')) {
    controller.initLessonPage('lesson2');
} else if (path.includes('Lesson 3.html')) {
    controller.initLessonPage('lesson3');
} else if (path.includes('Lesson 4.html')) {
    controller.initLessonPage('lesson4');
} else if (path.includes('Lesson 5.html')) {
    controller.initLessonPage('lesson5');
} else if (path.includes('Lesson 6.html')) {
    controller.initLessonPage('lesson6');
} else if (path.includes('index.html') || path === '/' || path.endsWith('/index.html')) {
    controller.initHomePage();
}

if (path.includes('Sign Up.html')) {
    const auth = new AuthController();
    auth.initSignUpPage();
} else if (path.includes('Sign In.html')) {
    const auth = new AuthController();
    auth.initSignInPage();
} else if (path.includes('Profile.html')) {
    const profile = new ProfileController();
    profile.initProfilePage();
}
