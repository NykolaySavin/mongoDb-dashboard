import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import {addContent, saveChanges,deleteContent} from "../../../redux/modules/articleForm.module.input";

export const mapDispatchToProps = {
    addContent: addContent,
    deleteContent:deleteContent,
    saveChanges:saveChanges
};
export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);