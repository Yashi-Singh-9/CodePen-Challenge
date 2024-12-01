document.getElementById('toggle').addEventListener('change', function() {
    const hotScene = document.querySelector('.hot');
    const coldScene = document.querySelector('.cold');
    
    if (this.checked) {
        hotScene.classList.add('hidden');
        coldScene.classList.remove('hidden');
    } else {
        coldScene.classList.add('hidden');
        hotScene.classList.remove('hidden');
    }
});
