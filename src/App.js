import React from 'react';

import {  Cards, CountryPicker, Chart } from './components';
import Banner  from './components/banner';
import { fetchData } from './api/';
import styles from './App.module.css';
import * as Icon from 'react-feather';
import image from './images/image.png';


import './App.scss';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;



    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Banner />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
       
        <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      

        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a
            href="http://iamayushdas.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iamayushdas
          </a>
        </div>
        <a
          href="https://github.com/iamayushdas/covid19tracker"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
        
      </footer>
      </div>
    );
  }
}

export default App;