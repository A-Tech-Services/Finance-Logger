import React from 'react';
import "./Logger.css";

const Logger = () => {
  return (
    <div className='logger'>
        <h1 className='loggerHeading'>Finance Logger</h1>

        <div className="log">
            <form>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select name="type" id="type">
                    <option value="Invoice">Select Type</option>
                        <option value="Invoice">Invoice</option>
                        <option value="Credit">Credit</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="destination">To/From:</label>
                    <input type="text" placeholder='type in destination'/>
                </div>

                <div>
                    <label htmlFor="details">Details:</label>
                    <input type="text" placeholder='type in details'/>
                </div>

                <div>
                    <label htmlFor="amount">Amount (€):</label>
                    <input type="text" placeholder='amount in euro'/>
                </div>

                <button type='submit' value="Add" >Add</button>
            </form>
        </div>
    </div>
  )
}

export default Logger