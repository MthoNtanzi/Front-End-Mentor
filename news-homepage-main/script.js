const openMenuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden');
})

openMenuBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('hidden');
});
closeMenuBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden');
});
