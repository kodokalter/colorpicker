const button = document.getElementById('btn');
const hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const identifier = document.getElementById('i');
button.addEventListener('click',function(){
    const color = random()
    document.body.style.backgroundColor = `#${color}`;
    identifier.textContent = `#${color}`
})
const random = ()=>{
    const a  = Math.floor(Math.random()*16);
    const b  = Math.floor(Math.random()*16);
    const c  = Math.floor(Math.random()*16);
    const d  = Math.floor(Math.random()*16);
    const e  = Math.floor(Math.random()*16);
    const f  = Math.floor(Math.random()*16);
    const result = `${hexColor[a]}${hexColor[b]}${hexColor[c]}${hexColor[d]}${hexColor[e]}${hexColor[f]}`
    return result;
}