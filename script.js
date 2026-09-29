console.log("This is an JavaScript file");
let name='Puneeth';
const city='Mysuru';
const year=2026;
console.log(name,city,year);

function great(){
    console.log('Hello!' + name + ' from ' + city + ' in the year ' + year);
}
great();
const add =function great(a,b){
    return a+b;
}
console.log(add(15,25));
const greeting=(name) => {
    return 'Hi' + name;

}
console.log(greeting('Puneeth'));
const p=document.querySelector('p');
p.innerHTML='Updated Text';