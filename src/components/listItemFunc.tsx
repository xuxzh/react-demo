let count=0;
const listItem = (props:{data:Record<string,string|number>}) => {
    return ( 
        <div className='row mb-3'>
            <div className='col-6 themed-grid-col'>{props.data.name}</div>
            <div className='col-1 themed-grid-col'>¥{props.data.price}</div>
            <div className='col-2 themed-grid-col'>{count}个</div>
        </div>
     );
}
 
export default listItem;