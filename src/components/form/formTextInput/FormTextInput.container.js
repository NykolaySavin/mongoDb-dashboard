import { connect } from 'react-redux';
import TextInput from './FormTextInput';
import ContentTextInput from './FormContentTextInput';
import {handleTextInput,handleContentTextInput} from '../../../redux/modules/articleForm.module.input';


export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem
    };
}
export const mapDispatchToProps = {
    handleInput: handleTextInput,
};
export const mapDispatchContentToProps = {
    handleInput: handleContentTextInput,
};
export const ArticleInput =  connect(mapStateToProps, mapDispatchToProps)(TextInput);
export const ContentInput =  connect(mapStateToProps, mapDispatchContentToProps)(ContentTextInput);