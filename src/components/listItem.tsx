import * as React from 'react';
import style from './listItem.module.css';
import classnames from 'classnames/bind';

const cls=classnames.bind(style)


let count=0;
 
class ListItem extends React.Component<{data:any,onDelete:(id:number)=>void}> {
    // constructor(props:{data:any}){
    //     super(props);

    //     this.handleDecrease=this.handleDecrease.bind(this);
    // }

    doSomethingWithCount(){
        if(count<0){
            count=0;
        }
    }

    // doHandle=()=>{
    //     this.handleDecrease(this.props.data.id);
    // }

    handleDecrease=(...args:any[])=>{
        console.log('args',args);
        // console.log('---',event)
        count --;
        this.doSomethingWithCount();
    }

    handleIncrease=()=>{
        count++
    }
    
    // state = { :  }
    render() { 
        return ( 
            <div className='row mb-3'>
                <div className='col-6 themed-grid-col'>
                    <span className={cls('title')}>{this.props.data.name}</span>
                </div>
                <div className='col-1 themed-grid-col'>¥{this.props.data.price}</div>
                <div className={`col-2 themed-grid-col${count?'':'-s'}`}>
                    <button onClick={this.handleDecrease.bind(this,this.props.data.id)} type='button' className='btn btn-primary' > - </button>
                    <span className={cls('digital')}>{count}</span>
                    <button onClick={this.handleIncrease} type='button' className='btn btn-primary' > + </button>
                </div>
                <div className='col-1 themed-grid-col'>
                    <button onClick={()=>this.props.onDelete(this.props.data.id)} type='button' className='btn btn-danger btn-sm'>删除</button>
                </div>
            </div>
         );
    }
}
 
export default ListItem;