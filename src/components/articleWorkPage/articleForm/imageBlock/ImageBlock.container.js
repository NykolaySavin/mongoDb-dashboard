import { connect } from 'react-redux';
import ImageBlock from "./ImageBlock";

export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem,
    };
}
export default connect(mapStateToProps,null)(ImageBlock);