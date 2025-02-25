import { useState } from 'react';
import PropTypes from 'prop-types';


function AccordionItem({faq}) {
  const {title, content} = faq
  const [isOpen, setIsOpen] = useState(false)
 

  return(
    
      <li className="max-w-md mx-auto mt-24">
        <div className="overflow-hidden shadow-md bg-white">
            <div className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="font-semibold text-lg">{title}</h3>
                <span className="transform transition-transform">{isOpen ? '▲': '▼'}</span>
            </div>
            {isOpen && <div>
                {content}
            </div>}
        </div>
    </li>
  )
}


AccordionItem.propTypes = {
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};




export default AccordionItem