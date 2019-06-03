import { connect } from 'react-redux';
import TextInput from './FormTextAreaInput';
import ContentTextInput from './FormContentTextAreaInput';
import {handleContentTextInput, handleTextInput} from '../../../redux/modules/articleForm.module.input';


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
export const ArticleAreaInput =   connect(mapStateToProps, mapDispatchToProps)(TextInput);
export const ContentAreaInput =  connect(mapStateToProps, mapDispatchContentToProps)(ContentTextInput);