import { connect } from 'react-redux';
import Table from './Table';
import {deleteArticle, editArticle} from "../../redux/modules/articlePage.module";


export const mapDispatchToProps = {
    deleteItem: deleteArticle,
    editItem:editArticle
};
export default connect(null, mapDispatchToProps)(Table);
