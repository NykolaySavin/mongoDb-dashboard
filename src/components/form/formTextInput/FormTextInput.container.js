import { connect } from 'react-redux';
import TextInput from './FormTextInput';
import {handleTextInput} from '../../../redux/modules/articleForm.module.input';


export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem
    };
}
export const mapDispatchToProps = {
    handleInput: handleTextInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(TextInput);