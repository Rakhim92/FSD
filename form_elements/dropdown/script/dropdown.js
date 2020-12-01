const arrow = document.querySelector('.input_content');
const dropdown = document.querySelector('.dropdown');
const wrapper = document.querySelector('.wrapper');
const guests = document.querySelector('.guests');

function showHide(){
    arrow.addEventListener('click', ()=>{
        dropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', (event)=>{
        let target = event.target;
        if ( dropdown.classList.contains('show') && target.closest('.dropdown')){
            console.log('inside dropdown while show');
        } else if(target.closest('.guests')) {
            console.log('inside guests');
            dropdown.classList.toggle('show');
        } else {
            console.log('other');
            dropdown.classList.remove('show');
        }
    })
}
showHide();






// document.addEventListener('click', ()=>{
// if(dropdown.classList.contains('.show')){
//  console.log('gfgf');    
// }    

// });

// if(dropdown === event.target.closest('.dropdown')(dropdown.classList.contains('.show'))) {
//     console.log('vnutri')
//     dropdown.style.display ='flex';    
// } else {
//     console.log('snarugi')
//     dropdown.style.display = 'none';
// }