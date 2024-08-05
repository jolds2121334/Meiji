document.getElementById('text-analysis-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('vocab-title').value.trim();
    const text = document.getElementById('text-input').value;

    if (title && text) {
        const words = analyzeText(text);

        if (words) {
            const newVocabSet = {
                title: title,
                words: words
            };

            // Store the new vocabulary set in localStorage
            localStorage.setItem('newVocabSet', JSON.stringify(newVocabSet));
            document.getElementById('analysis-feedback').textContent = 'Vocabulary set created successfully!';
        } else {
            document.getElementById('analysis-feedback').textContent = 'Failed to create vocabulary set.';
        }
    } else {
        document.getElementById('analysis-feedback').textContent = 'Please enter both a title and text.';
    }
});

function analyzeText(text) {
    // Simulate text analysis to extract vocabulary words
    const wordArray = text.split(/\s+/);
    const vocabSet = {};

    wordArray.forEach(word => {
        const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
        if (cleanedWord.length > 3 && !vocabSet[cleanedWord]) {
            vocabSet[cleanedWord] = {
                definition: `Definition for ${cleanedWord}`,
                context: `Example sentence using the word ${cleanedWord}.`
            };
        }
    });

    return vocabSet;
}
