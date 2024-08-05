document.addEventListener('DOMContentLoaded', function() {
    const vocabSetsList = document.getElementById('vocab-sets-list');
    const vocabData = JSON.parse(localStorage.getItem('newVocabSet')) || {};

    // Example data structure
    // const vocabData = {
    //     title: "Sample Vocabulary Set",
    //     words: {
    //         word1: { definition: "Definition for word1", context: "Context for word1" },
    //         word2: { definition: "Definition for word2", context: "Context for word2" }
    //     }
    // };

    if (Object.keys(vocabData).length === 0) {
        vocabSetsList.innerHTML = '<li>No vocabulary sets found.</li>';
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h4>${vocabData.title}</h4>
            <ul>
                ${Object.entries(vocabData.words).map(([word, details]) => `
                    <li>
                        <strong>${word}</strong>: ${details.definition}
                        <button onclick="editWord('${word}')">Edit</button>
                        <button onclick="removeWord('${word}')">Remove</button>
                    </li>
                `).join('')}
            </ul>
        `;
        vocabSetsList.appendChild(listItem);
    }
});

function editWord(word) {
    alert(`Editing word: ${word}`);
    // Implement editing logic here
}

function removeWord(word) {
    const vocabData = JSON.parse(localStorage.getItem('newVocabSet')) || {};
    delete vocabData.words[word];
    localStorage.setItem('newVocabSet', JSON.stringify(vocabData));
    location.reload();
}
