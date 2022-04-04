import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { randomNumber } from '../../../calcu/math';
import Banner from '../../../components/Banner/Banner'
import PhotoForm from '../../components/PhotoForm/PhotoForm'
import { addPhoto, editPhotoId } from '../../PhotoSlice/PhotoSlice';

AddEdit.propTypes = {} ;

function AddEdit() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { photoId } = useParams()
    const isAddmode = !photoId;
    const editPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))
    console.log(editPhoto)
    const initValue = isAddmode ? {
        title: '',
        categoryId: null,
        photo:'',
    } : editPhoto;
    const handerSubmit = (e) => {
        return new Promise ( resolve => {
            setTimeout(() => {
                if(isAddmode){
                    const newPhoto = {
                        ...e,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto)
                    dispatch(action)
                }else {
                    console.log(e)
                    const action = editPhotoId(e)
                    dispatch(action)
                }
            })
            navigate('/')
            resolve(true)
        }, 2000)
    }

  return (
      <Container>
        <Banner title="🎉 Your awesome photos 🎉" imgURL={'../../img/orange-bg.jpg'}/>
        <ContainerPhoto>
            <PhotoForm 
                isAddmode= {isAddmode}
                initValue= {initValue}
                onSubmit={handerSubmit}
            />
        </ContainerPhoto>
      </Container>
        
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const ContainerPhoto = styled.div`
    width: 40%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default AddEdit