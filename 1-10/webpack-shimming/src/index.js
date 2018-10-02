import 'babel-polyfill';

function component () {
    let element = document.createElement('div');

    element.innerHTML = join(['Hello','World'],'');

    this.alert('Hmmm, this probably isn\'t a great idea...')

    return element;
}

document.body.appendChild(component())