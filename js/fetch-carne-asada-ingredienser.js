function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.querySelector('#carne-ingr');
const url = 'data/carne-asada-tacos-ingredienser.json';

fetch(url)
    .then((resp)=> resp.json())
    .then(function (data){
        console.log(data.carne);
        let carne = data.carne;

        return carne.map(function (ca){
            let li = createNode('li');
            li.innerHTML = ca.ci;
            append(ul, li);
        })
    })
    .catch(function (error){
        console.log(error);
    })