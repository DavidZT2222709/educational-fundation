import React from 'react'

const WhatsAppButton = () => {
  return (
    <a
        href="https://wa.me/573244163188"
        target="_blank"
        rel="noopener noreferrer"
        className='fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform'
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10"
        />
    </a>
  )
}

export default WhatsAppButton
