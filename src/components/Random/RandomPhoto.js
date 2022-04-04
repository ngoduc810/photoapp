import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string,
    onImageChange: PropTypes.func,
    onRandomBtnBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
    name: '',
    imageURL: '',
    onImageChange: null,
    onRandomBtnBlur: null
}

const randomImgURL = () => {
    const randomURL = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomURL}/300/300`;
}

function RandomPhoto(props) {
    const {name, imageURL, onImageChange, onRandomBtnBlur} = props;
    const handerClick = async () => {
        if(onImageChange) {
            const random = randomImgURL()
            onImageChange(random)
        }
    }
  return (
    <Container>
        <div>
            <Button
                name={name}
                onClick={handerClick}
                onBlur={onRandomBtnBlur}
            >Random a Photo</Button>
        </div>
        <Img>
            {imageURL && (
                <img 
                    src={imageURL}
                    alt='Please Random again ...'
                    onError={handerClick}
                />
            )}
        </Img>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 10px;
`

const Button = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 130px;
    background-color: #3080d4;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #003abc;
    }
`
const Img = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`

export default RandomPhoto