import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='text-center absolute bottom-5 left-0 right-0'>
      Copyright © {currentYear} All Rights Reserved by TextEase | Design by{' '}
      <a href="https://mitulsavani.tech/" target='_blank' rel='noopener noreferrer' className='text-primary font-medium'>
        Mitul Savani
      </a>
    </div>
  );
}
