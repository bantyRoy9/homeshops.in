import { link } from './../Assests/link';
import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className='main-container'>
            <div>
                <div className='items-container'>
                    <div className="w-[1280] h-[234px]">
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="paan corner banner" width="1280" height="234.8623853211009" loading="eager" className="object-fill" />
                    </div>
                </div>
                <div className='items-container'>
                    <div className='w-full flex gap-5 m-4'>
                        <div className="w-[336px] h-[195px] cursor-pointer">
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" width="336px" height="195px" loading="eager" className="object-fill" />
                        </div>
                        <div className="w-[336px] h-[195px] cursor-pointer">
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" width="336px" height="195px" loading="eager" className="object-fill" />
                        </div>
                        <div className="w-[336px] h-[195px] cursor-pointer">
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" width="336px" height="195px" loading="eager" className="object-fill" />
                        </div>
                    </div>
                </div>
                <div className='items-container'>
                <div className='w-full'>
                    <div className='grid grid-cols-10'>
                        {link.map(el => (
                            <div className="w-[128px] h-[188px] cursor-pointer">
                                <img src={el} alt="" loading="eager" className="object-fill" width='128px' height='150px' />
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
