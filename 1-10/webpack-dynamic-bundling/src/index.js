function getComponent() {
    return import(/*webpackChunkName:"lodash"*/ 'lodash').then(({default: _})=> {
        let element = document.createElement('div');

        element.innerHTML = _.join(['hello', 'webpack'], '');

        return element;

    }).catch(error => 'error occured while loading component')
}

getComponent().then(component =>{
    document.body.appendChild(component);
})