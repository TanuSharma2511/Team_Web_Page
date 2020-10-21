import React,{Component} from 'react';
import "../App.css";
import { connect } from 'react-redux';
import {openModal} from "../actions/items";

///////////////////////////  CARD COMPONENT ///////////////////////////
class Card extends Component {
  
  // function to open the modal
    onModalOpen = (id) => {
        this.props.openModal(id);
      }
  
    render() {
      const { id, name, position, place,image} = this.props.product;

      return (
        
        <React.Fragment>
           <div class="team_member" onClick={() => this.onModalOpen(id)}>
            <div class="team_img">
              <img src={image} alt="Team_image"  />
            </div>
            <h3>{name}</h3>
            <p class="role" >{position}</p>
            <p class="role2">{place}</p>
           
          </div>   
      
        </React.Fragment> 
      );
    }
  }
  
const mapStateToProps = state => ({
    
  });

  export default connect(mapStateToProps,{openModal})(Card);
