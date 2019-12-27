import React from 'react';
import TodoList from './components/TodoList'
import './App.css';

// function App() {
//   let myclassName = 'h51911'
//   let handClick = function () {
//     console.log('click')
//   }

//   let myStyle = { width: 200 }
//   return (
//     <>
//     <div id="container">
//       <h1>{myclassName}</h1>
//       <ul>
//         <li>帅</li>
//         <li>000</li>
//       </ul>
//       <label htmlFor="username">用户名：</label>
//       <input type="text" id="username"></input>
//       <img src="img/jingjing.png" style={{ width: 200 }} />
//       <img src="img/g3.jpg" style={myStyle} />
//       <button onClick={handClick}>点我</button>
//     </div>
//     <div>JINGJING</div>
//     </>
//   );
// }

class App extends React.Component {
  constructor() {
    super();//Parent.call(this)
    // 调用super后才拥有自己的this

    // 状态（组件自己的数据）
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App;
