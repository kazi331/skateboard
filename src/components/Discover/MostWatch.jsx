import React from 'react';
import {  WatchInfo } from '../../utils/WatchInfo';
import WatchInfoDetails from './WatchInfoDetails';

const MostWatch = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-6'>Most Watched</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 rounded-2xl p-4'>
               
                    {
                        WatchInfo.map(Info=><WatchInfoDetails key={Info.id} Info={Info}></WatchInfoDetails>)
                    }

            </div>
        </div>
    );
};

export default MostWatch;