import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import {addContent} from "../../../redux/modules/articleForm.module.input";

export const mapDispatchToProps = {
    addContent: addContent,
};
export function mapStateToProps(state) {
    return {
        workingItem: state.workingItem,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);