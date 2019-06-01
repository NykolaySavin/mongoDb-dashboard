import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import {addContent, saveChanges} from "../../../redux/modules/articleForm.module.input";

export const mapDispatchToProps = {
    addContent: addContent,
    saveChanges:saveChanges
};
export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);