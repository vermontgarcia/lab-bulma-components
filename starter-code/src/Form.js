import React, {Component} from 'react';

import FormField from './FormField';
import CoolButton from './CoolButton';

class Form extends Component {
  render() {

    return (
      <form>
        <FormField 
          labelName='Name'
          inputName='name'
          inputType='text'
          placeholder='e.g. Vermont Garcia'/>
        <FormField
          labelName='Email'
          inputName='email'
          inputType='text'
          placeholder='e.g. vermontgarcia@gmail.com'/>
        <FormField
          labelName='Password'
          inputName='password'
          inputType='password'
          placeholder='*********'/>
        <CoolButton
          buttonName='Sign Up'
          buttonType='button is-small is-success' />
      </form>
    )
  }
}

export default Form;