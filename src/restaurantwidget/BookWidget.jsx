import { useState,useId,useEffect} from 'react'


function BookWidget() {
  const [bookForm, setBookForm] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState(false)
  const [formData, setFormData] = useState({
    partyName: '',
    phone: '',
    email: '',
    date: '',
    guest: '',
    time: '',

  }) 

  const id = useId()


  function handleChange(event) {
    setFormData(prevFormData => {
      const {name,value} = event.target
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }

   function handleFormToggle() {
   setBookForm(prevData => !prevData)
  }

   function handleBooking() {
      // Check if all fields are filled
      const allFieldsChecked = Object.values(formData).every(field => field.trim() !== "");
      if (allFieldsChecked) {
        setConfirmMessage(true);
        setBookForm(false); // Hide the form
      } else {
        alert("Please fill out all fields before submitting!");
      }
    }


    useEffect(() => {
      if (confirmMessage) {
        alert('See You Soon Thank You!');
        setConfirmMessage(false); // Clear the message after showing alert
      }
    }, [confirmMessage]);
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[550px] bg-white p-6 rounded-lg shadow-md">
        {/*show form when button is clicked */}
        {!bookForm ? 
            (<div className='flex justify-center mt-4'>
            <button onClick={handleFormToggle}
            className="rounded-md bg-[#6A64F1] text-white py-3 px-6 font-bold hover:bg-[#5548c8]"
          >
            Book
          </button>
          </div>
        ) : (
          
          <form onSubmit={(e)=> e.preventDefault()}>
          <div className="flex flex-col gap-4">
          <label htmlFor={`${id}-email`}>Pick A Date</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id={`${id}-email`} name='date' onChange={handleChange} value={formData.date}
          />
          <label htmlFor={`${id}-guest`}>Number Of Guests</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id={`${id}-guest`} name='guest' value={formData.guest} onChange={handleChange}
          />
          <label htmlFor={`${id}-time`}>Choose A Time</label>
          <input
            type="time"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id={`${id}-time`} name='time' value={formData.time} onChange={handleChange}
          />
          <label htmlFor={`${id}-partyName`}>Name</label>
          <input type="text" className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' id={`${id}-partyName`} name='partyName' value={formData.partyName} 
          onChange={handleChange}/>
          
          <label htmlFor={`${id}-email`}>Email</label>
          <input type="email" className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' id={`${id}-email`} name='email'value={formData.email}
          onChange={handleChange}/>
          
          <label htmlFor={`${id}-phone`}>Number</label>
          <input type="tel" className='border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' id={`${id}-phone`} name='phone' value={formData.phone} onChange={handleChange}/>
        </div>
          <div className='flex justify-center mt-4'>
        <button onClick={handleBooking}type='button' className="mt-4 rounded-md bg-[#6A64F1] text-white flex items-center justify-center py-3 px-8 font-bold hover:bg-[#5548c8]">Confirm</button>
        </div>
        </form>
        )}
    </div>
    </div>
  );
}

export default BookWidget;



