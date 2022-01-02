/*------ Menu ------*/
const Showmenu = (toggoledivId,navId) => {

    let toggolediv = document.getElementById(toggoledivId),
        nav = document.getElementById(navId);
    
    if(toggolediv && nav){
        toggolediv.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    }

}
Showmenu('nav-toggle','nav-menu');

/*------ Cehange Active Class On Size Button ------*/


let Sizebuttons = document.querySelectorAll('.size__tallas');

function changectivesize(){
    Sizebuttons.forEach(Size => Size.classList.remove('active'))
    this.classList.add('active')
}

Sizebuttons.forEach(size => size.addEventListener('click',changectivesize));


/*------ Cehange Active Class On Color Button ------*/

let colorbuttons = document.querySelectorAll('.sneaker__color');
let SneakerImges = document.querySelectorAll('.sneaker__img');

function changectivecolor(){

    colorbuttons.forEach(colorbutton => colorbutton.classList.remove('active'))
    this.classList.add('active')

    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let Image = document.querySelector(`.sneaker__img[color="${color}"]`);


    
    document.documentElement.style.setProperty('--primary', primary)
    
    SneakerImges.forEach(img => img.classList.remove('shows'))

    Image.classList.add('shows')

}

colorbuttons.forEach(color => color.addEventListener('click',changectivecolor));


/*------ Cehange Qunt of The Decrease Or Increase ------*/

let Decreasespan = document.getElementById('cant-decrease'),
    Increasespan = document.getElementById('cant-increase')
    price = document.querySelector('.price'),
    pricenumber = Number(price.innerHTML);
    Quntspan = document.getElementById('cant-qunt'),
     numberqunt = Number(Quntspan.innerHTML);

    Decreasespan.addEventListener('click',function(){
        if(numberqunt <= 1){
            Quntspan.innerHTML = 1;
            price.innerHTML = pricenumber.toFixed(2);
        }else{
            Quntspan.innerHTML = --numberqunt;
            price.innerHTML = (pricenumber * numberqunt).toFixed(2);
        }
    })

    Increasespan.addEventListener('click',function(){

            Quntspan.innerHTML = ++numberqunt;
            price.innerHTML = (pricenumber * numberqunt).toFixed(2);

    })


/*

                                <span id="cant-decrease">-</span>
                                <span id="cant-qunt">1</span>
                                <span id="cant-increase">+</span>

 */