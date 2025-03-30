import { LessonModel } from '../model/lessonModel.js';
import { LessonView } from '../view/lessonView.js';

export class LessonController {
    constructor() {
        this.model = new LessonModel();
        this.view = new LessonView();
    }

    initLessonPage(lessonId) {
        this.view.addDoneButton(lessonId); 

        this.view.onDone = (id) => {
            this.model.markDone(id);
        };
        if (this.model.isDone(lessonId)) {
            setTimeout(() => {
                const targetBtn = document.querySelector('#lesson-complete-button-anchor button');
                if (targetBtn) {
                    targetBtn.disabled = true;
                    targetBtn.textContent = '✓ Completed';
                }
            }, 0);
        }
        
        else {
            this.view.addDoneButton(lessonId);
        }
        this.view.onDone = (id) => this.model.markDone(id);
    }

    initHomePage() {
        const completed = this.model.getAllDone();
        completed.forEach(id => this.view.showDoneStatusOnHome(id));
    }
}
