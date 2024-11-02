import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import SortPopup from './sort-popup';
import Categories from './categories';

type Props = {}

function TopBar({}: Props) {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10"
      )}>
        <Container className='flex items-center justify-between '>
            <Categories />
            <SortPopup />
        </Container>
    </div>
  );
}

export default TopBar