// import { useState } from "react"

// const RightsideContact = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [paragh, setParagh] = useState('')

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   }

//   const handleMessage = (e) => {
//     setParagh(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
    
//     console.log('Form Data:', { name, email, paragh});
    
//     setName('');
//     setEmail('');
//     setParagh('');
//   };
  
//   return (
//     <div className='flex justify-center w-6/12'>
//         <form className='flex flex-col justify-between w-10/12' onSubmit={handleSubmit}>
//             <input type="text" className='rounded-lg outline-none text-xl p-3 text-black' value={name} onChange={handleNameChange} placeholder='Your Name'/>
//             <input type="email" className='rounded-lg outline-none text-xl p-3 text-black' value={email} onChange={handleEmailChange} placeholder='Your Email'/>
//             <textarea className='h-32 rounded-lg outline-none text-xl p-3 text-black' value={paragh} onChange={handleMessage} placeholder='Your Message'/>
//             <button type='submit' className='text-3xl bg-amber-400 rounded-md p-3 text-black hover:bg-amber-500 duration-300 ease-in-out'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default RightsideContact

// RightsideContact.jsx



// import { useState } from "react";

// const RightsideContact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     console.log('Form Data:', { name, email, message });
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className='w-full md:w-6/12'>
//       <form className='flex flex-col gap-4 md:gap-6 w-full' onSubmit={handleSubmit}>
//         <input type="text" className='rounded-lg outline-none text-lg md:text-xl p-3 text-black' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name'/>
//         <input type="email" className='rounded-lg outline-none text-lg md:text-xl p-3 text-black' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email'/>
//         <textarea className='h-32 rounded-lg outline-none text-lg md:text-xl p-3 text-black' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message'/>
//         <button type='submit' className='text-lg md:text-2xl bg-amber-400 rounded-md p-3 text-black hover:bg-amber-500 duration-300 ease-in-out'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RightsideContact;


import { useState } from "react";

const RightsideContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full md:w-6/12'>
      <form className='flex flex-col gap-4 md:gap-6 w-full' onSubmit={handleSubmit}>
        <input
          type="text"
          className='rounded-lg outline-none text-lg md:text-xl p-3 text-black'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your Name'
          required
        />
        <input
          type="email"
          className='rounded-lg outline-none text-lg md:text-xl p-3 text-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your Email'
          required
        />
        <textarea
          className='h-32 rounded-lg outline-none text-lg md:text-xl p-3 text-black'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Your Message'
          required
        />
        <button
          type='submit'
          disabled={loading}
          className={`text-lg md:text-2xl bg-amber-400 rounded-md p-3 text-black hover:bg-amber-500 duration-300 ease-in-out ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        
        {status === 'success' && (
          <p className="text-white">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500">Error sending message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default RightsideContact;