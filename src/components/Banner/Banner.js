import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';


Banner.propTypes = {
  title: PropTypes.string,
  imgURL: PropTypes.string
} 

Banner.defaultProps = {
  title: '',
  imgURL: null
}
function Banner(props) {
  const { title, imgURL} = props;
  const bannerStyle = imgURL
    ? { backgroundImage: `url(${imgURL})` }
    : {}
  return (
    <Container style={bannerStyle}>
        <h1>{title}</h1>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 100%;

  background-image: url(../../img/banner1.jpg);
  background-position: center;
  background-size: cover;

  h1 {
    color: rgba(255, 255, 255, 0.85);
    font-weight: bold;
    font-size: 50px;
  }
`

export default Banner