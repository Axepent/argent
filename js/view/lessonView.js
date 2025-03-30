export class LessonView {

    addDoneButton(lessonId) {
        const anchor = document.getElementById('lesson-complete-button-anchor');
    
        if (!anchor || anchor.querySelector('button')) {
            return;
        }
    
        const wrapper = document.createElement('div');
        wrapper.style.textAlign = 'right';
        wrapper.classList.add('mt-4', 'mb-2');

    
        const btn = document.createElement('button');
        btn.className = 'btn btn-success';
        btn.textContent = '✓ Mark as Done';
    
        btn.addEventListener('click', () => {
            this.onDone && this.onDone(lessonId);
            btn.disabled = true;
            btn.textContent = '✓ Completed';
        });
    
        wrapper.appendChild(btn);
        anchor.appendChild(wrapper);
    }

    showDoneStatusOnHome(lessonId) {
        const card = document.querySelector(`[data-lesson-id="${lessonId}"]`);
        if (card) {
            const textElement = card.querySelector('.card-text');
            const originalText = textElement.textContent.trim();
    
            textElement.innerHTML = `
                <div class="d-flex justify-content-between align-items-start">
                    <span>${originalText}</span>
                    <span class="badge bg-success">✓ Done</span>
                </div>
            `;
        }
    }
    
}
