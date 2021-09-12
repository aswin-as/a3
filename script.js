// var myImages = ['img/img1.jpeg','img/img2.jpeg','img/img3.jpeg','img/img4.jpg','img/img5.jpeg'];

// var container = document.querySelector('#container');
// var img = document.getElementById('img');
// var prev = document.getElementById('prev');
// var next = document.getElementById('next');

// countNum = 0;

// next.addEventListener('click',function(){
//     countNum++;
//     if(countNum > myImages.length-1){ countNum = 0; }

//     var newSlide = document.createElement('img');
//     newSlide.src = myImages[countNum];
//     newSlide.className = 'fadeing';
//     newSlide.setAttribute('alt',Image);
//     newSlide.setAttribute('id',img);
//     container.appendChild(newSlide);
    
//     // img.src = myImages[countNum];

// });





var body = document.getElementsByTagName('body')[0];
var btn = document.getElementById('btn');

if( btn.textContent = 'Dark mode'){

    btn.addEventListener('click',function(){
        body.style.background = 'black';
        body.style.color = 'white';
        btn.textContent = 'Day mode';
    });

}else if(  btn.textContent === 'Day mode'){
    btn.addEventListener('click',function(){
        body.style.background = 'white';
        body.style.color = 'black';
        btn.textContent = 'Dark mode';
    });
}

else{
    document.write('hello world');
}










