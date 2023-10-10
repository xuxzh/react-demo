import React, { Component } from 'react';
import './App.css';
import ListItem from './components/listItem';
import ItemA from './components/hoc/itemA';
import ItemB from './components/hoc/itemB';
import ItemC from './components/rp/itemC';

const proudcts: any[] = [
  {
    id: 1,
    name: 'mi 13',
    price: 4000,
    stock: 20
  },
  {
    id: 2,
    name: '玩家国度游戏本',
    price: 6500,
    stock: 20
  },
  {
    id: 3,
    name: '索尼游戏机',
    price: 5800,
    stock: 20
  }
]
// function App() {
//   return (
//     <>
//       <div className="container">
//       {proudcts.map(item=>{
//         return <ListItem key={item.id} data={item}/>
//       })}
//     </div>
//     </>
//   );
// }

class App extends Component {
  renderList() {
    // if(proudcts?.length===0){
    //   return <div className='text-center'>购物车是空的</div>
    // }
    return proudcts.map(item => {
      return <ListItem key={item.id} data={item} onDelete={this.handleDelete} />
    })
  }

  handleDelete = (id: number) => {
    console.log('id:', id)
  }

  render(): React.ReactNode {
    return (
      <>
        <div className='cotainer'>
          <div className='title'>Header</div>
          {proudcts.length === 0 && <div className='text-center'>购物车是空的</div>}
          {this.renderList()}
        </div>
        <div>
          <ItemA id={1} />
        </div>
        <div>
          <ItemB />
        </div>
        <div>
          <ItemC />
        </div>
      </>
    )
  }
}

export default App;
