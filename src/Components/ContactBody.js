import React from 'react';
import '../CSS/ContactBody.css';


function ContactBody() {
  return (
    <div>
        <h1 className='cheading'>Send us a Special Message, Suggestion or Enquiry</h1>
      <form className='conform'>
        <section>
        <label htmlFor='name'>NAME</label>
        <input className='cname input' type='text' id='name'/>
        </section>
         <br/>
        <section>
        <label htmlFor='phone'>PHONE</label>
        <input className='cphone input' type='number' id='phone'/>
        </section>
        <br/>

        <section>
        <label htmlFor='email'>E-Mail</label>
        <input className='cmail input' type='text' id='mail'/>
        </section>
         <br/>
        <section>
        <label htmlFor='message'>MESSAGE</label>
        <textarea className='message' id='message' name='cmessage'>

        </textarea>
        </section> 
         <br/>
        <section id='seb'>
        <button className='send' type='submit'>SEND</button>
        </section> 
      </form>
    </div>
  )
}

export default ContactBody;
