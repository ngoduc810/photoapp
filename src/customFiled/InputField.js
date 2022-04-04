import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disable: false
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disable
    } = props;
    const {name, value, onChange, onBlur} = field;
  return (
    <FormGroup>
        <label>{label}</label>

        <Input  name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                id={name}
                type={type}
                disabled={disable}
                placeholder={placeholder}
                />
    </FormGroup>
  )
}

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  
  label {
    font-size: 20px;
    font-weight: 400;
  }
`

const Input = styled.input`
  height: 40px;
  font-size: 15px;
  padding-left: 10px;
  outline: none;
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export default InputField