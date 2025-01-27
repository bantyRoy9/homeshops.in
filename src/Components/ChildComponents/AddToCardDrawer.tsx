import { useAppSelector } from '../../Redux/Store'
import { IconRightArrow } from '../../Assests/Icons'
import AddToCartButton from '../Buttons/AddToCartButton'
import React, { useState } from 'react'

type Props = {}

const AddToCardDrawer = (props: Props) => {
    const {addtocard} = useAppSelector(state=>state.store);
    const [count, setCount] = useState(0);
    const handleClick = (count:1|-1) => setCount(prev=>prev + count);
    return (addtocard.length>0?
        <div className='m-3 flex flex-col gap-4' >
            <div className='flex flex-col bg-white rounded-lg p-3 gap-5'>
                <div className='flex gap-3'>
                    <div className='h-11 w-11 rounded-lg bg-neutral-50'>
                        <img alt="" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" loading="lazy" />
                    </div>
                    <div>
                        <div className='text-primary-heading-md font-heading-bold'>Delivary in 8 minutes</div>
                        <div className='text-primary-heading-sm font-light mt-1'>Shipment of 12 item</div>
                    </div>
                </div>
                {Object.keys(addtocard).map(el=>(
                    <div className='flex gap-x-3 items-center'>
                        <div className='w-16 h-16 border border-neutral-100 rounded-lg'>
                            <img alt="Amul Gold Full Cream Fresh Milk" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142" loading="lazy" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-primary-heading-sm font-light w-[70%] line-clamp-2'>Amul Gold Full Cream Fresh Milk</span>
                            <span className='text-primary-heading-sm font-light my-1'>500 ml</span>
                            <span className='text-primary-heading-sm font-semibold'>₹34</span>
                        </div>
                        <div>
                            <AddToCartButton handleClick={handleClick} itemCount={count}/>
                        </div>
                    </div>
                ))}
            </div>
            {/* Billing details */}
            <div className='flex flex-col bg-white rounded-lg p-3 gap-5'>
                <h3 className='text-primary-heading-md font-heading-bold'>Bill details</h3>

            </div>
            <div className='flex flex-col bg-white rounded-lg p-3'>
                <h3 className='text-primary-heading-md font-heading-bold'>Cancellation Policy</h3>
                <span className='text-primary-heading-sm text-gray-400'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</span>
            </div>
            <div className='absolute bottom-0 w-full left-0 right-0 bg-white p-3 pb-4 rounded-t-lg'>
                <button className='bg-green-700 p-3 w-full rounded-md flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-white text-primary-heading-md'>₹34</span>
                        <span className='text-[10px] text-gray-100 font-light'>TOTAL</span>
                    </div>
                    <span className='text-white flex text-primary-heading-md'>Login to proceed <IconRightArrow /></span>
                </button>
            </div>
        </div >:<></>
    )
}

export default AddToCardDrawer