export class LessonModel {
    constructor() {
        this.key = 'completedLessons';
        this.completed = JSON.parse(localStorage.getItem(this.key)) || [];
    }

    markDone(lessonId) {
        if (!this.completed.includes(lessonId)) {
            this.completed.push(lessonId);
            this._save();
        }
    }

    isDone(lessonId) {
        return this.completed.includes(lessonId);
    }

    _save() {
        localStorage.setItem(this.key, JSON.stringify(this.completed));
    }

    getAllDone() {
        return this.completed;
    }
}
