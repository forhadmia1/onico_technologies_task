import React from 'react';
import '../styles/FormPageStyle.css'

const FormPage = () => {
    return (
        <div className='container'>
            <div className='form-style'>
                <h2 className='title'>Receipt Details</h2>
                <form>
                    <label for="date">
                        <span>Date <span class="required">*</span></span>
                        <input type="text" class="input-field input-date" name="date" placeholder='Enter Date'/>
                    </label>
                    <label for="amount">
                        <span>Amount<span class="required">*</span></span>
                        <input type="number" class="input-field" name="amount" placeholder='Enter Amount (in INR)'/>
                    </label>
                    <label for="payment">
                        <span>Payment Mode</span>
                        <select name="payment" class="select-field">
                            <option value="cash">Cash</option>
                            <option value="card">Card</option>
                        </select>
                    </label>
                    <label for="remark">
                        <span>Remark</span>
                        <input type="text" class="input-field" name="remark" placeholder='Enter Remark'/>
                    </label>
                    <div className='btn-container'>
                        <button className='form-btn cancel-btn' type='submit'>Cancel</button>
                        <button className='form-btn submit-btn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPage;