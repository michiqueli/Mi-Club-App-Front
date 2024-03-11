import React from 'react';
import { FieldProps } from '../components/constants/interfaces'

function Field(props: FieldProps) {
    const {placeholder, name, type, onChange, value} = props;
  return (
    <div className='w-full'>
         <input
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                className='text-black rounded-3xl border border-blue-200 hover:border-blue-300 mb-3 text-start py-2 w-full focus:outline-none'
            />
    </div>
  )
}

export default Field
