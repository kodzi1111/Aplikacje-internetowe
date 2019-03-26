const init = () =>{
    const c = document.getElementById('container');
 [...c.children].forEach(el => console.log(el));
}
window.addEventListener('DOMContentLoaded', init);
