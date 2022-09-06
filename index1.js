const para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    console.log('Mouse Inside')
});
para = document.getElementById='para';
para.addEventListener('mouseout', function run() {
    console.log('hello Pattlo')
});


function toggleHide() {
    // let btn = document.getElementById('btn');
    // let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = 'none'

    }
    else {
        para.style.display = 'block';

    }
}