"use client";

import {PaystackButton} from 'react-paystack'




interface PaymentButtonProps{
    amount:number,
    studentName:string,
    email:string,
    schoolName:string,
    onSuccess:(reference: string) => void,
    onClose:()=>void
}


const PaymentButton: React.FC<PaymentButtonProps> = ({
    amount,
     studentName,
     email,
      schoolName,
       onSuccess,
        onClose
}) => {

    const publicKey ='pk_test_1ea77073f0f67b32a50c3f5e4ec3907060e041e5'
    const componentProps = {
        amount,
        studentName,
        schoolName,
        email,
        metadata:{
            custom_fields:[
                    { display_name: 'Student Email',
                        variable_name:'email',
                        value:email
                     },


                    
            ]
        },
        publicKey,
        text:'Pay Now',
        onSuccess,
        onClose
    }

    
    return(
        <div>
            <PaystackButton {...componentProps} />
        </div>
    )
}

export default PaymentButton