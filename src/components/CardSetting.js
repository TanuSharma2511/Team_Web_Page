import React, { Component } from 'react';
import "../App.css";
import { connect } from 'react-redux';
import Card from "./Card";

/////////////////////  CARDSETTING COMPONENT  ///////////////////
class CardSetting extends Component {
    render() {
        console.log(this.props.products)
        return (
            <div>

                {/* RENDERS THE CARD COMPONENT */}
                <div className="team">
                {this.props.products.map(product =>
                     (    <Card key={product.id} product={product} />)
                     )}
         
                    </div> 
            </div>
        )
    }
}

// GETTING THE STATE FROM OPENCLOSEREDUCER
const mapStateToProps = state => ({
    products: state.openClose.products,
  });
  export default connect(mapStateToProps)(CardSetting);


