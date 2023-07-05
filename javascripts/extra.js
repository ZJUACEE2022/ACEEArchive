var p=localStorage.getItem("data-md-color-primary");
if (p){
    document.body.setAttribute('data-md-color-primary',p);
    document.querySelector("#__palette_1").setAttribute('data-md-color-primary',p);
    document.querySelector("#__palette_2").setAttribute('data-md-color-primary',p);
}
var a=localStorage.getItem('data-md-color-accent');
if (a){
    document.body.setAttribute('data-md-color-accent',a);
    document.querySelector("#__palette_1").setAttribute('data-md-color-accent',p);
    document.querySelector("#__palette_2").setAttribute('data-md-color-accent',p);
}
