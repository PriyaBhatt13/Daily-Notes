import _ from 'lodash';

function component () {
    let element = document.createElement('div');
    let button = document.createElement('button');
    let br = document.createElement('br');

    button.innerHTML = 'click me and look and the console';
    element.innerHTML = _.join(['hello','webpack'],'');

    element.appendChild(br);
    element.appendChild(button);

    button.onclck = e =>  import(/*webpackChunkName: "print"*/'./print').then(module=>{
        let print = module.default;
        print();

    });
    return element;

}

document.body.appendChild(component());