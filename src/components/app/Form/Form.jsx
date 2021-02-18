import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ sailorName, realName, description, attack, zodiacSign, imageUrl, onChange, onSubmit, successDisplay }) => (
  <div key="form-div-key" className="form-div">

      <form onSubmit={onSubmit} className="create-sailor-form">
        <div className="form-header">
          <h1>Create Your Own Sailor!</h1>
        </div>

        <div className="sailor-name-box">
          <label>Enter your home planet, star or moon:
            <input 
              type="text" 
              name="sailorName" 
              placeholder="ex. Deimos" 
              value={sailorName} 
              onChange={onChange} />
          </label>
        </div>

        <div className="real-name-box">
          <label>Enter your real name:
            <input 
              type="text" 
              name="realName" 
              placeholder="" 
              value={realName} 
              onChange={onChange} />
          </label>
        </div>

        <div className="description-box">
          <label>Give the fans a brief description of yourself:
            <input 
              type="text" 
              name="description" 
              placeholder="" 
              value={description} 
              onChange={onChange} />
          </label>
        </div>

        <div className="attack-box">
          <label>What's your number one "attack"?
            <input 
              type="text" 
              name="attack" 
              placeholder="ex. Dead Scream" 
              value={attack} 
              onChange={onChange} />
          </label>
        </div>

        <div className="zodiac-sign-box">
          <label>What's your zodiac sign?
            <input 
              type="text" 
              name="zodiacSign" 
              placeholder="" 
              value={zodiacSign} 
              onChange={onChange} />
          </label>
        </div>

        <div className="image-box">
          <label>Paste your image url here:
            <input 
              type="text" 
              name="imageUrl" 
              placeholder="" 
              value={imageUrl} 
              onChange={onChange} />
          </label>
        </div>

        <button data-testid="form-button">Submit</button>
      </form>

      <div data-testid="success-display">
        <p>{successDisplay}</p>
      </div>

  </div>
);

Form.propTypes = {
  sailorName: PropTypes.string.isRequired,
  realName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attack: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  successDisplay: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;