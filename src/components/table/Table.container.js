import { connect } from 'react-redux';
import Table from './Table';
import {deleteArticle} from "../../redux/modules/articlePage.module";


export const mapDispatchToProps = {
    deleteItem: deleteArticle
};
export default connect(null, mapDispatchToProps)(Table);
