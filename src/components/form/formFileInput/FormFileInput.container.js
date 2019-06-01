import { connect } from 'react-redux';
import {handleFileInput} from '../../../redux/modules/articleForm.module.input';
import FormFileInput from "./FormFileInput";



export const mapDispatchToProps = {
    handleInput: handleFileInput,
};
export default connect(null, mapDispatchToProps)(FormFileInput);