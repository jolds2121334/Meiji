document.addEventListener('DOMContentLoaded', () => {
    const incorrectList = document.getElementById('incorrect-list');
    const incorrectAnswers = JSON.parse(localStorage.getItem('incorrectAnswers')) || [];

    incorrectAnswers.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Word:</strong> ${entry.word} <br>
            <strong>Definition:</strong> ${entry.definition} <br>
            <strong>Question:</strong> ${entry.context.replace(new RegExp(`\\b${entry.word}\\b`, 'i'), '_____')} <br>
            <strong>Your Answer:</strong> ${entry.wrongAnswer}
        `;
        incorrectList.appendChild(listItem);
    });
});
