const helloWorld = React.createElement('h1', {}, 'Hello world!');
const test = <h1>Bonjour!</h1>;

// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(test, document.querySelector('#app'));
