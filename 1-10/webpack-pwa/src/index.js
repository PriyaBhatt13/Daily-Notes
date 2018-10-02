import _ from 'lodash';

if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered',registration)
        }).catch(registrationError => {
            console.log('SW registraton failed',registrationError);
        });
    });
}

function component () {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello','World'],'');

    return element;
}

document.body.appendChild(component())