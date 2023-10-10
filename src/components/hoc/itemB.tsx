import { FunctionComponent } from "react";
import withTooltip from './withTooltip'

interface ItemAProps {
    
}
 
const ItemA: FunctionComponent<ItemAProps> = () => {
    return ( 
        <button className="btn btn-primary">Item B</button>
     );
}
 
export default withTooltip(ItemA);