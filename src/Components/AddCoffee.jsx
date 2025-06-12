import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffeeData = Object.fromEntries(formData.entries())
    console.log(newCoffeeData);
    console.log(formData.entries());


    fetch('http://localhost:3000/coffees',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newCoffeeData)
    }).then(res => res.json())
    .then(data =>{
       if(data.insertedId){
        console.log('added successfully.');
        Swal.fire({
  title: "Coffee Added Successfully!",
  icon: "success",
  draggable: true
});
       }
    })
  }



    return (
        <div className='p-24'>
             <div className='p-24 text-center space-y-4'>
                <h1 className='text-6xl text-center'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable connect of a page when looking at its layout. The point of using lorem Ispum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
            </div> 

    <form onSubmit={handleAddCoffee}>

<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Supplier</label>
  <input type="text" name='suplier' className="input w-full" placeholder="Supplier Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Taste</label>
  <input type="text" name='Taste' className="input w-full" placeholder="Taste Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Price</label>
  <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full" placeholder="Details Name" />
</fieldset>
  </div>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
  <label className="label">Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
  </fieldset>
    <input type="submit" value="Add Coffee" className='btn w-full' />
    </form>
        </div>
    );
};

export default AddCoffee;