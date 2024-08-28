import { CustomButton } from '@/components/clickable/CustomButton'
import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen '>
        <CustomButton variant='primary'  label='Generate Statement' />
    </div>
  )
}

export default Form