import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Button, Col, Row } from 'reactstrap';


PhotoList.propTypes = {
    photoList: PropTypes.array,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
}

PhotoList.defaultProps = {
    photoList: [],
    onEdit: null,
    onRemove: null,
}

function PhotoList(props) {
    const {photoList, onEdit, onRemove} = props;
    const handerEdit = (e) => {
        onEdit(e)
    }
    const handerRemove = (e) => {
        onRemove(e)
    }
  return (
    <Row>
       {photoList.map((item, index) => (
           <Col key={index}   xs="12" md="6" lg="4" 
           style={{display: 'flex',
                    alignItem: 'center',
                    justifyContent: 'center'
           }}>
               <Item>
                    <img src={item.photo} alt={item.title}/>
                    <OverLay className='overlay'>
                        <div>{item.title}</div>
                        <ButtonOver>
                            <Button1 color='primary' outline onClick= {() => handerEdit(item)}>Edit</Button1>
                            <Button1 color='danger' outline onClick= {() => handerRemove(item)}>Remove</Button1>
                        </ButtonOver>
                    </OverLay>
               </Item>
           </Col>
       ))}
    </Row>
  )
}
const Item = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height: 300px;
    overflow: hidden;
    position: relative;
    margin: 20px 0;
    img {
        transition: all .3s ease-in;
    }
    &:hover img {
        transform: scale(1.2)
    }
    &:hover .overlay {
        visibility: visible;
        transform: translateY(0);
    }
`

const OverLay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    max-width: 300px;
    max-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    visibility: hidden;
    transition: all .1s ease-in;
    transform: translateY(5rem);
    div {
        color: white;
        margin: 20px;
    }
`
const ButtonOver = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Button1 = styled(Button)`
    height: 40px;
    width: 100px;
    color: white;
`

export default PhotoList