import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../../../components/Banner/Banner'
import PhotoList from '../../components/PhotoList/PhotoList'
import { removePhoto } from '../../PhotoSlice/PhotoSlice';

function Main() {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handerEdit = (photo) => {
    navigate(`${photo.id}`)
  }
  const handerRemove = (photo) => {
    const action = removePhoto(photo.photo)
    dispatch(action);
  }
  return (
    <>
        <Banner title="Pick your amazing photo"/>
        <Button to={'/photo'}>Add New Photo</Button>
        <PhotoList 
          photoList={photos}
          onEdit={handerEdit}
          onRemove={handerRemove}
        />
    </>
  )
}

const Button = styled(Link)`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 150px;
    height: 30px;
    background-color: #00c3d1;
    color: #333;
    border: none;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0a939d;
    }
`

export default Main