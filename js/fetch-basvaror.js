function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.querySelector('#basvaror');
const url = 'data/inspiration-lista.json';

fetch(url)
    .then((resp)=> resp.json())
    .then(function (data){
        console.log(data.basvarorna);
        let basvaror = data.basvarorna;

        return basvaror.map(function (bv){
            let li = createNode('li');
            li.innerHTML = bv.basvara;
            append(ul, li);
        })
    })
    .catch(function (error){
        console.log(error);
    })