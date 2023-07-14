import PropTypes from 'prop-types';
export const FormInpTel = ({handlerInpTel, formInpNumber})=>{
    return(
        <label htmlFor="number">
           <span>Number</span> 
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handlerInpTel}
        value={formInpNumber}
        required
        />
        </label>
    )
}
FormInpTel.propTypes = {
    formInpNumber: PropTypes.string,
    
}