import { connect } from 'react-redux';
import App from './App';
import {fetchArticles} from "./redux/modules/articlePage.module";


export const mapDispatchToProps = {
    fetchArticles: fetchArticles,
};
export default connect(null, mapDispatchToProps)(App);
