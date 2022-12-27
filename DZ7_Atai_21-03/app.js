document.querySelector('.plus').onclick = function(){
    let x = Number(document.querySelector('.x').value);
    let y = Number(document.querySelector('.y').value);
    let sol = x + y;
    if
        (document.querySelector('.sol').innerHTML 
        += `<div class="solution">
            <span class="a">${x}+${y}=${sol}</span>
        </div>`){}
}
document.querySelector('.minus').onclick = function(){
    let x = Number(document.querySelector('.x').value);
    let y = Number(document.querySelector('.y').value);
    let sol = x - y;
    if 
        (document.querySelector('.sol').innerHTML 
        += `<div class="solution">
            <span class="a">${x}-${y}=${sol}</span>
        </div>`){}
}
document.querySelector('.multiply').onclick = function(){
    let x = Number(document.querySelector('.x').value);
    let y = Number(document.querySelector('.y').value);
    let sol = x * y;
    if 
        (document.querySelector('.sol').innerHTML 
        += `<div class="solution">
            <span class="a">${x}*${y}=${sol}</span>
        </div>`){}
}


document.querySelector('.refresh').onclick = function(){
    document.querySelector('.x').value = '';
    document.querySelector('.y').value = '';
    document.querySelector('.sol').innerHTML = '';
}