function showAlert() {
    console.log('Alert # 1');
    console.log('Alert # 2');
    console.log('Alert # 3');
    console.log('Alert # 4');
}

function secondFunc() {
    alert('Sarah Ahmed');
}

function changeName() {

    //  console.log(document.querySelector('input').value)  


    /* 
    -querySelector se HTML element select hoga.
    -queryselector k bad . use krenge tou attribute get ho jayega us element ka jo selector me diya hoga.
    -InnerHTMl se content get hoga jo selector me diya hoga.
    */
    console.log(document.querySelector('#userinput').innerHTML = document.querySelector
        ('input').value);

}
function changeColor() {

    document.querySelector('h1').style = 'background-color:grey';
}
function changeFont() {

    document.querySelector('h1').style = 'font-family: monospace';
}
function changeForeColor() {

    document.querySelector('h1').style = 'Color: red ';
}
function AllInOne() {

    document.querySelector('h1').style = 'Color: red; font-family: monospace; background-color:grey;';
}

function color(){
    document.querySelector('h1').style = 'Color: gold';

}
function clearColor(){
    document.querySelector('h1').style = 'Color: black';

}
function changeBodyColor(){
    document.querySelector('body').style = 'background-color: white; ' + document.querySelector('input').value;

}