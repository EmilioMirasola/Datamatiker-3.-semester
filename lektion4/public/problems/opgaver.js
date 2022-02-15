for (let e of document.querySelectorAll('h1 + * + *')) {
    e.style.color = 'brown';
}

const lis = document.querySelectorAll('li');
for (let i = 0; i < lis.length; i++) {
    if (i % 2 === 0) {
        lis[i].style.backgroundColor = "lightGrey"
    }
}


for (let e of document.querySelectorAll('h1')) {
    e.nextElementSibling.innerHTML = '<h2>' + e.innerHTML + '<h2/>'
}