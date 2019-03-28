import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class TypedJS extends Component {
  render() {
    return (<Typed
      loop= {true}
      typedRef={(typed) => { this.typed = typed; }}
      strings={['Greetings','I am Ranson' ,'I am a fullstack JS Dev', 'I am currently looking for opportunities!']} 
      typeSpeed={70}/>
    );
  }
}

export default TypedJS