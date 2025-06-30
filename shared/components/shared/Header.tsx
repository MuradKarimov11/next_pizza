'use client';

import { cn } from '@/shared/lib/utils';
import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { CartButton } from './cart-button';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
    className?: string;
    hasSearch?: boolean;
    hasCart?: boolean;
}

export const Header: React.FC<Props> = ({className, hasSearch = true, hasCart = true}) => {
  
    const router = useRouter();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        let toastMessage = '';

        if (searchParams.has('paid')) {
          toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
        }

        if (searchParams.has('verified')) {
            toastMessage = 'Почта успешно подтверждена!';
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace('/');
                toast.success(toastMessage, {
                  duration: 3000,
                });
            }, 1000);
        }
    }, [])
    
    return (
        <header className={cn('border border-b',className)}>
            <Container className='flex items-center justify-between py-8'>
                <Link href='/'>
                    <div className='flex items-center gap-4'>
                        <Image src='/logo.png' alt='Logo' width={35} height={35}/>
                        <div>
                            <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                            <p className='text-sm text-gray-400 leading-3'>Вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>


                {hasSearch && (
                    <div className="mx-10 flex-1">
                        <SearchInput/>
                    </div>
                )}


                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                        <User size={16}/>
                        Войти
                    </Button>

                    {hasCart && <CartButton/>}
                </div>
            </Container>      
        </header>
    );
}


