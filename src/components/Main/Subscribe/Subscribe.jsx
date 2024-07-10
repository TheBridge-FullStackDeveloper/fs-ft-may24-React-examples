import React, { useState } from 'react';
import FormSubscribe from "./FormSubscribe";
import CardContact from "./CardContact";
const Subscribe = () => {

  const [message, setMessage] = useState('');

  return (
    <div>
      Subscribe
      <FormSubscribe setMessage={setMessage} />
      <CardContact message={message}/>
    </div>
  );
};

export default Subscribe;
