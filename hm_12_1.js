let link = '';

const enterLink = document.getElementById('enterLink')
const changeSite = document.getElementById('newLink')

enterLink.addEventListener('click', () =>{
    link = prompt()
})

changeSite.addEventListener("click", () => {
    window.location.href = link;
})