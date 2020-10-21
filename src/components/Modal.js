import React, { Component } from 'react';
import "../App.css";
import { connect } from 'react-redux';
import {closeModal} from "../actions/items";

//////////////////////// MODAL COMPONENT ////////////////////////
class Modal extends Component {

  // function to close the component
    onCloseModal = () => {
        this.props.closeModal();
      }
   
    render() {
        console.log(this.props.modalOpen);
        return (
            <React.Fragment>
           
           {this.props.modalOpen ? (<div class="team_member_modal">
             <div className="team_img">
                 <div className="right" onClick={() => this.onCloseModal()}>
                    <p>&times;</p> 
                 </div>
               <img src={this.props.product.image} alt="Team_image" />
             </div>
             <div className="writing">
             <h3>{this.props.product.name}</h3>
             <p className="role">{this.props.product.position}</p>
             <p className="role2">{this.props.product.place}</p>
             <div className="details">
                 <p>{this.props.product.detail}</p>
             </div>
             </div>
            
           </div>) : null}
          
       
         </React.Fragment> 
        )
    }
}

//getting the data from openCloseReducer
const mapStateToProps = state => ({
    modalOpen: state.openClose.modalOpen,
    product: state.openClose.product
  });

  export default connect(mapStateToProps,{closeModal})(Modal);

