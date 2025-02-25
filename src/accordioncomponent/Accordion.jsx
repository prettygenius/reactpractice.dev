import Header from './Header'
import  {faqs}  from './data'
import AccordionItem from './AccordionItem'



function Accordion() {
    return(
        <div className='container'>
        <Header />
        <ul className="accordion">
     {faqs.map((faq) => {
      return(
        <AccordionItem key={faq.id} faq={faq} />
      )
     })}
    </ul>
        </div>
    )
}

export default Accordion