import React, { useEffect, useState } from 'react';
import dollarIcon from "../../../assets/images/icon-dollar.svg"

const BillAmount = ({ onBillAmountChange }) => {

    const [billAmount, setBillAmount] = useState(0)

    const onChange = (e) => {
        setBillAmount(e.target.value)
    }

    useEffect(() => {
        onBillAmountChange(billAmount)
    },[onBillAmountChange, billAmount])
    

    return (
        <div>
            <h2>Bill</h2>
            <img className="icon" src={dollarIcon} alt="Icon Dollar" />
            <input id="bill" className="input" onChange={onChange} type="number" step="0.01" min="1" placeholder="0"></input>
        </div>
    );
};

export default BillAmount;