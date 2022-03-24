import React, { Component ,Fragment  } from 'react';
import Banner from '../../components/Banner/index.jsx';
import Form from '../../components/Form/index.jsx';
import ProductInfo from '../../components/ProductInfo/index.jsx';


export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <ProductInfo/>
        <Form/>
      </Fragment>
    )
  }
}

export default Home