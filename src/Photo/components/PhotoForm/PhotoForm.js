import { FastField, Form, Formik } from 'formik'
import React from 'react'
import PropTypes from 'prop-types';
import InputField from '../../../customFiled/InputField';
import Category from '../../../customFiled/Category';
import RandomField from '../../../customFiled/RandomField';
import { FormGroup } from 'reactstrap';
import styled from 'styled-components';

export const PHOTO_CATEGORY_OPTIONS = [
  { value: 1, label: 'Technology' },
  { value: 2, label: 'Education' },
  { value: 3, label: 'Nature' },
  { value: 4, label: 'Animals' },
  { value: 5, label: 'Styles' },
];

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const { initValue,isAddmode } = props; 
  
  return (
    <Formik initialValues={initValue}
            onSubmit={props.onSubmit}
    
    >
      {fomikProps => {
        // do something ...

        return (
          <FormStyle>
            <FastField
              name= 'title'
              component= {InputField}

              label= 'Title'
              placeholder='Input Name ... '
            />
            <FastField 
              name= 'categoryId'
              component= {Category}

              label= 'Category'
              placeholder= 'Choose a Category ...'
              option={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField 
              component= {RandomField}

              name= 'photo'
              label= 'Photo'
            />
            <FormGroup>
              {isAddmode ? 
              <BtnSubmit type='submit'>Submit</BtnSubmit> : <BtnEdit type='submit'>Edited</BtnEdit>
              }
              </FormGroup>
          </FormStyle>
        )
      }}
    </Formik>
  )
}

const FormStyle = styled(Form)`
  width: 100%;
`
const BtnSubmit = styled.button`
  background-color: #3080d4;
  width: 120px;
  height: 40px;
  border: none; 
  color: white;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    background-color: #003abc;
  }
`

const BtnEdit = styled.button `
  background-color: #4fba69;
  width: 120px;
  height: 40px;
  border: none; 
  color: white;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    background-color: #003abc;
  }

`

export default PhotoForm