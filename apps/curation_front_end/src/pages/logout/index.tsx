// SPDX-FileCopyrightText: 2023 HH Partners
//
// SPDX-License-Identifier: MIT

import { Loader2 } from 'lucide-react';
import { authHooks } from '@/hooks/zodiosHooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
    const [counter, setCounter] = useState(3);
    const { error, isSuccess, isLoading } = authHooks.useImmutableQuery('/logout', undefined, { withCredentials: true })
    const router = useRouter();

    useEffect(() => {
        if (counter === 0) router.push('/');
        if (isSuccess) {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);
        }
    }, [counter, router, isSuccess]);

    return (
        <div className='bg-gray-200 h-screen'>
            {isLoading &&
                <div className='flex justify-center items-center h-full bg-gray-200'>
                    <div className='text-lg w-72 bg-white rounded-md h-min p-10 flex justify-center'>
                        <Loader2 className='mr-2 h-16 w-16 animate-spin' />
                    </div>
                </div>
            }
            {error &&
                <div className='flex justify-center items-center h-full bg-gray-200'>
                    <h1 className='text-lg w-72 bg-white rounded-md h-min p-10'>Error</h1>
                </div>
            }
            {isSuccess &&
                <div className='flex justify-center items-center h-full bg-gray-200'>
                    <div className='text-lg w-72 bg-white rounded-md h-min p-10'>
                        <p>Logged out successfully.</p>
                        <p>Redirecting in {counter} seconds.</p>
                    </div>
                </div>
            }
        </div>
    )
}