import styled from 'styled-components';

const ImgCard = styled.div`
  .container {
    display: table;
    cursor: pointer;
    width: 100%;
  }
  .subcontainer {
    position: relative;
    background-color: #2f3238;
    overflow:hidden;
  }
  .containerImage {
    position: relative;
    background-color: #17819c;
  }
  .title {
    text-align: center;
    font-size: 30px;
    color: white;
    font-weight: bold;
  }
  .subtitle {
    text-align: center;
    font-size: 18px;
    color: white;
    position: absolute;
    top: 47%;
    left: 50%;
  }
  .subtitleText {
    position: relative;
    left: -50%;
    padding: 30px 40px;
    border: 3px solid white;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .img {
    max-width: 100%;
    cursor: pointer;
    position: relative;
    vertical-align: middle;
  }
`;

export default ImgCard;

