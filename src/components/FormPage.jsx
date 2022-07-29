import React, { useState } from 'react';
import '../styles/FormPageStyle.css'
import TableRow from './TableRow';

const FormPage = () => {
    const [allData, setAllData]= useState([])

    const handleForm=(e)=>{
        e.preventDefault()
        const date= e.target.date.value;
        const amount= e.target.amount.value;
        const payment= e.target.payment.value;
        const remark= e.target.remark.value;
        const newData= {
            date,
            amount,
            payment,
            remark
        }
        setAllData([...allData,newData])
        e.target.reset()
    }


    return (
        <div className='container'>
            <div className='form-style'>
                <h2 className='title'>Receipt Details</h2>
                <form onSubmit={handleForm}>
                    <label htmlFor="date">
                        <span>Date <span className="required">*</span></span>
                        <input type="text" className="input-field input-date" name="date" placeholder='Enter Date' required/>
                    </label>
                    <label htmlFor="amount">
                        <span>Amount<span className="required">*</span></span>
                        <input type="number" className="input-field" name="amount" placeholder='Enter Amount (in INR)' required/>
                    </label>
                    <label htmlFor="payment">
                        <span>Payment Mode<span className="required">*</span></span>
                        <select name="payment" className="select-field">
                            <option value="cash">Cash</option>
                            <option value="card">Card</option>
                        </select>
                    </label>
                    <label htmlFor="remark">
                        <span>Remark</span>
                        <input type="text" className="input-field" name="remark" placeholder='Enter Remark'/>
                    </label>
                    <div className='btn-container'>
                        <button className='form-btn cancel-btn' type='reset'>Cancel</button>
                        <button className='form-btn submit-btn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <section className='table-section'>
            {allData.length>0 && <table className='table-style'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    allData.map((data,index)=><TableRow
                    data={data}
                    key={index}
                    ></TableRow>)
                 }
                </tbody>
            </table>}
            </section>
        </div>
    );
};

export default FormPage;