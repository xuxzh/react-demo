import { FunctionComponent } from 'react'
import WithTooltip from './WithTooltip';
interface ItemCProps {

}

const ItemC: FunctionComponent<ItemCProps> = () => {
  return (
    <>
      {/* <WithTooltip render={() => (
        <button className='btn btn-primary'>Item C</button>
      )} /> */}
      <WithTooltip>
        {() => (
          <button className='btn btn-primary'>Item C</button>
        )}
      </WithTooltip>
    </>
  );
}

export default ItemC;