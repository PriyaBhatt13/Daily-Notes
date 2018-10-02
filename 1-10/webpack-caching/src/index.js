import _ from 'lodash';
import Print from './print.js';

function component () {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello','World'],'');
    element.onclick = Print.bind(null,'hello webpack');

    return element;
}

document.body.appendChild(component())