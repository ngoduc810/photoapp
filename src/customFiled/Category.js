import React from 'react'
import { FormGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import Select from 'react-select';
import styled from 'styled-components';



Category.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    option: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
}

Category.defaultProps = {
    option: [],
    label: '',
    placeholder: '',
    disable: false
}

function Category(props) {
    const {
        field,
        option, label, placeholder, disable
    } = props;
    const {name, value} = field;
    const selectedOption = option.find(option => option.value === value);
    const handerChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        };
        field.onChange(changeEvent)
    }

  return (
    <FormGroup>
        <Label>{label}</Label>
        <Select 
                name={name}
                value={selectedOption}
                id={name}
                onChange={handerChange}
                options={option}
                isDisabled={disable}
                placeholder={placeholder} />
    </FormGroup>
  )
}

const Label = styled.label`
    display:block;
    margin-bottom: 10px;
`

export default Category