console.log("ok");

console.log('    teste    ');

//criar trim

console.log(trimLeft('   qq '));
console.log(trimLeft('   qq ')==='qq ');

//função nomeada

function trimLeft(str){
    let r='';
    let ok= false; //ok é uma flag
    for(let i=0;i<str.length;i++){
        if (str[i]!==' ' || ok){
            r += str[i];
            ok = true;
        }
    }
    return r;
}

//as funções podem ser armazenadas em variaveis
let d= function(nome){
    return 'Darth '+nome;
};

console.log (d); //imprime a função
console.log(d()); //"Dartn undefined" //invoca a função
console.log(d('Mustache')); //"Dartn Mustache"

//função anonima

console.log(function (nome){
    return 'Padawan '+nome;
} ('Rogério'));


console.log(d('Marcio'));

//callback é uma fução a ser chamada de volta

function texto(str, callback){
    return callback(str);
}

console.log(texto('   blablabla', trimLeft));
console.log(texto('  blabla',d));


function impar(ateh, callback){
    for( let i=1; i<=ateh;i++){
        if (i%2===1){
            callback(i);
        }
    }
}

impar(10, console.log);
impar(10, document.write.bind(document));
//passando uma função anonima
impar(50,function(n){
    console.log(`ímpar: ${n}`); //string interpolada
})


document.body.children[2].onclick= function(){ alert('p clicado');};

document.body.children[2].onclick= function(){ alert('paragrafo clicado');};

let h2= document.querySelector('h2');

console.log(h2);

//addEventListener(evento, callback);
h2.addEventListener('click', function(){
    this.style.color='red';
});



let input= document.querySelector('input');
//let button= document.getElementById('#darthfy');
let button= document.querySelector('#darthfy');
let output= document.querySelector('output');

button.addEventListener('click',function(){
    d(input.value);
    output.innerText=d(input.value);
    //output.textContent=d(input.value);
    
});

let like= document.querySelector("#like");
let span= document.querySelector('span');
let likes= 0;
like.addEventListener('click',function(){
    //++algo; é uma pré-incremento
    span.textContent=`${++likes} like(s)`;
})















