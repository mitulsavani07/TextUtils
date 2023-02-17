import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-center pt-5'>
      <p className='md:absolute bottom-5 lg:left-80 left-0 md:left-60 right-0'>
        Copyright © {currentYear} All Rights Reserved by TextEase | Design by{' '}
        <a href="https://mitulsavani.tech/" target='_blank' rel='noopener noreferrer' className='text-primary font-medium'>
          Mitul Savani
        </a>
      </p>
    </footer>
  );
}
