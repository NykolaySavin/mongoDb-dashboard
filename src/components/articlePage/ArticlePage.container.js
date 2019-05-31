import { connect } from 'react-redux';
import ArticlePage from './ArticlePage';
import {addArticle} from "../../redux/modules/articlePage.module";

export function mapStateToProps(state) {
    return {
        items: state.items,
    };
}
export const mapDispatchToProps = {
    addItem: addArticle,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
