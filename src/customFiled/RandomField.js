import React from 'react'
import { FormGroup } from 'reactstrap'
import RandomPhoto from '../components/Random/RandomPhoto'
import PropTypes from 'prop-types'
import styled from 'styled-components'

RandomField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RandomField.defaultProps = {
    label: '',
}

function RandomField(props) {
    const {field, form, label} = props;
    const {name, value } = field;
    const handerChangeImg = (newImgURL) => {
        form.setFieldValue(name, newImgURL)
    }   
  return (
    <FormGroup>
        <Label>{label}</Label>
        <RandomPhoto 
            name={name}
            imageURL={value}
            onImageChange={handerChangeImg}
        />
    </FormGroup>
  )
}

const Label = styled.label`
    display: block;
    margin-top: 20px;
`

export default RandomField