import * as React from 'react';
import style from './listItem.module.css';
import classnames from 'classnames/bind';

const cls = classnames.bind(style)


type ListItemProp = { data: any, onDelete: (id: number) => void }
type ListItemState = { count: number }

class ListItem extends React.Component<ListItemProp, ListItemState> {
  // constructor(props:{data:any}){
  //     super(props);

  //     this.handleDecrease=this.handleDecrease.bind(this);
  // }

  constructor(props: ListItemProp) {
    super(props);
    // 构造函数内可以直接赋值`this.state`，其他地方必须使用`this.setState`(异步进行)
    this.state = {
      count: 0
    }
  }

  // doSomethingWithCount(){
  //     if(this.state.count<0){
  //         this.setState({
  //             count:0
  //         })
  //     }
  // }

  // doHandle=()=>{
  //     this.handleDecrease(this.props.data.id);
  // }

  handleDecrease = (...args: any[]) => {
    // console.log('args',args);
    // console.log('---',event)
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
    // this.doSomethingWithCount();
  }

  handleIncrease = () => {
    console.log('step 1', this.state.count)
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('step 3', this.state.count)
    })
    console.log('step 2', this.state.count)
  }

  // state = { :  }
  render() {
    return (
      <div className='row mb-3'>
        <div className='col-6 themed-grid-col'>
          <span className={cls('title')}>{this.props.data.name}</span>
        </div>
        <div className='col-1 themed-grid-col'>¥{this.props.data.price}</div>
        <div className={`col-2 themed-grid-col${this.state.count ? '' : '-s'}`}>
          <button onClick={this.handleDecrease.bind(this, this.props.data.id)} type='button' className='btn btn-primary' > - </button>
          <span className={cls('digital')}>{this.state.count}</span>
          <button onClick={this.handleIncrease} type='button' className='btn btn-primary' > + </button>
        </div>
        <div className='col-1 themed-grid-col'>
          <button onClick={() => this.props.onDelete(this.props.data.id)} type='button' className='btn btn-danger btn-sm'>删除</button>
        </div>
      </div>
    );
  }
}

export default ListItem;