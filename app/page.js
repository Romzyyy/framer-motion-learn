'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        transition: {
            yoyo: Infinity,
        },
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
        },
    },
}

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col gap-40 items-center justify-center'>
            <svg
                class='h-48 w-48 text-black'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                {' '}
                <motion.path
                    d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
                    variants={icon}
                    initial='hidden'
                    animate='visible'
                />
            </svg>
            <Link href={'login/Dashboard'}>Dashboard</Link>
        </main>
    )
}
