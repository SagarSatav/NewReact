import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';

const FormData = () => {
    // const navigate=useNavigate()
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", });
    const [allFormData, setAllFormData] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(
            {
                ...formData,
                [name]: value,
            }
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllFormData([...allFormData, formData]);


        setFormData({
            firstName: '',
            lastName: '',
            email: '',
          
        });

        const jsonData = JSON.stringify(allFormData);
        console.log(jsonData);
        

    }
  


    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>FirstName</label>
                    <input type='text' id="firstName" name="firstName" value={formData.firstName} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='lastName'>LastName</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input tye="email" id="email" name="email" value={formData.email} onChange={handleInput} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <div>
                <div>
                    <h2>All Data</h2>
                    <ul>
                        {allFormData.map((data, index) => (
                            <li key={index}>{JSON.stringify(data)}</li>
                            
                        ))}
                    </ul>
                </div>
              
            </div>
        </div>

    )
}
export default FormData;