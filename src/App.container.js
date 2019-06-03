import { connect } from 'react-redux';
import App from './App';
import {fetchArticles,fetchArticle} from "./redux/modules/articlePage.module";


export const mapDispatchToProps = {
    fetchArticles: fetchArticles,
    fetchArticle:fetchArticle,

};
export function mapStateToProps(state) {
    return {
        error: state.error
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
