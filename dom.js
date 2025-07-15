// selector
document.getElementById('id') // give html element 

document.getElementById('id').id // to get id

document.getElementById('id').className // to get class of this id 
document.getElementById('id').getAttribute('class') // to get attribute with key call
document.getElementById('id').setAttribute('class','test heading') // to set class attribute override with test and heading

// style 

document.getElementById('id').style.backgroundColor = 'green';
document.getElementById('id').style.borderRadius = '2px';
// innerText vs textContent vs innerHtml

const title = document.getElementById('id');

title.innerText // return visible text
title.textContent // return displaynone element also like in span we said none 
title.innerHtml // return full html menas nexted <span>unijm</span> also

document.querySelector('h1') // 