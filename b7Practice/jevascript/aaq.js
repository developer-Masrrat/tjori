const btn = document.querySelector('#btn');
const topic = document.querySelector('#topic');
const detail = document.querySelector('#detail');
const right = document.querySelector('#right');

btn.addEventListener('click', function(){
const topicValue =topic.value;
const detailValue =detail.value;
const template = `<div class="post">
<div class="top">
    <h4>${topicValue}</h4>
</div>    
<div class="bottom">
    <p>${detailValue}</p>
</div>
</div>`;

right.innerHTML += template ;
});
