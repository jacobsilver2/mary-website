import React, { Component } from 'react';
import styled from 'styled-components';
import {spring, Motion} from 'react-motion'
import ImgCard from './styles/MainImageCardStyles';



class MainImageCard extends Component {
  state = { isHovering: false }

  handleHover(active) {
    this.setState({isHovering: active});
  }

  getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(this.state.isHovering ? 1 : 1.15),
        marginTop: spring(this.state.isHovering ? 22 : 25),
        imageOpacity: spring(this.state.isHovering ? 0.4 : 0.7),
        opacity: spring(this.state.isHovering ? 1 : 0)    
      },
    };
  }


  
  render() {
    return (
      <Motion {...this.getSpringProps()}>
        {tweenCollection => {
          let styleImage = {
               transform: 'scale(' + tweenCollection.scale + ')',
               opacity: tweenCollection.imageOpacity, 
             };
             let styleSubtitle = {
                opacity: tweenCollection.opacity,
             };
             return (
              <ImgCard>
                <div className="container">
                  <div className='subcontainer'>
                    <div className='containerImage' onMouseOver={() => this.handleHover(true)} onMouseOut={() => this.handleHover(false)}>
                     <img style={styleImage} src={this.props.img} className='img' alt={this.props.name}/>
                     <div className='overlay'>
                       <div className='subtitle' style={styleSubtitle}>
                         <div className='subtitleText'>{this.props.name}</div>
                       </div>
                     </div>
                    </div>
                  </div>
                </div>
             </ImgCard>
             )
        }}
      </Motion>

    );
  }
}

export default MainImageCard;