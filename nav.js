// watched a tutorial on how to use query selector to change the backgroudn when the side menu page is active or not
const openMenu = () => {
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('aside').className='active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('aside').className='';
}
document.getElementById('menubutton').onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}