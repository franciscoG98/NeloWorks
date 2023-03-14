import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './wappStyles.scss'

const WhatsappLink = () => {
  return (
    <>
        <a
            href="https://wa.link/pwwkz0"
            target="__blank"
            rel="noopener noreferrer"
        >
            <AiOutlineWhatsApp className='wapp_icon' />
        </a>
    </>
  )
}

export default WhatsappLink