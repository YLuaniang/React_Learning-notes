import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    //组件
    <App />,


    // JSX


    // React.createElement(
    // 'div',
    // { id: 'container' },
    // [
    //     React.createElement('h1', null, 'showcyl'),
    //     React.createElement(
    //         'ul',
    //         null,
    //         [
    //             React.createElement('li', null, '帅'),
    //             React.createElement('li', null, '技术高')
    //         ]
    //     )

    // ]), 
    


    
    // <div id="container">
    //             <h1>{myclassName}</h1>
    //             <ul>
    //                 <li>帅</li>
    //                 <li>000</li>
    //                 </ul>
    //                 <label htmlFor="username">用户名：</label>
    //                 <input type="text" id="username"></input>
    //                 <img src="img/jingjing.png" style={{width:200}}/>
    //     <img src="img/g3.jpg" style={myStyle} />
    //                 <button onClick={handClick}>点我</button>
    //             </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
