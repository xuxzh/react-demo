import { FunctionComponent } from "react";
import withTooltip from './withTooltip'

interface ItemAProps {
    [prop: string]: any
}

const ItemA: FunctionComponent<ItemAProps> = () => {
    return (
        <button className="btn btn-primary">Item A</button>
    );
}

export default withTooltip(ItemA);