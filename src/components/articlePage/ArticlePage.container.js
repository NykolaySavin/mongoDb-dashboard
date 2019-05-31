import { connect } from 'react-redux';
import ArticlePage from './ArticlePage';

export function mapStateToProps(state) {
    return {
        items: state.items,
    };
}
export default connect(mapStateToProps, null)(ArticlePage);
