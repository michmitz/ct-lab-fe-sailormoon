import React, { Component } from 'react'
import Header from '../components/app/Header/Header'
import Form from '../components/app/Form/Form'
import { createSailor } from '../services/sailorMoon-api'

export default class SailorCreator extends Component {
  state = {
    sailorName: '',
    realName: '',
    description: '',
    attack: '',
    zodiacSign: '',
    imageUrl: '',
    successDisplay: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  handleSubmit = async(event) => {
    // const { sailorName, realName, description, attack, zodiacSign, imageUrl } = this.state;
    event.preventDefault();

    const post = await this.handlePost();

    console.log(post)

    return this.setState({
      successDisplay: 'success!'
    })
  }

  handlePost = () => {
    const { sailorName, realName, description, attack, zodiacSign, imageUrl } = this.state;
    return createSailor(sailorName, realName, description, attack, zodiacSign, imageUrl)
    .then(json => (console.log(json)))
  }

  render() {
    const { sailorName, realName, description, attack, zodiacSign, imageUrl, successDisplay } = this.state;
    return (
      <div>
        <section>
          <Form 
            sailorName={sailorName} 
            realName={realName} 
            description={description}
            attack={attack}
            zodiacSign={zodiacSign}
            imageUrl={imageUrl}
            successDisplay={successDisplay}
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit} />
        </section>
      </div>
    )
  }
}
