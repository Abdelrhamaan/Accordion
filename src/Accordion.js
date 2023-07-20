import AccordionItem from "./AccordionItem";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((el, index) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          key={el.title}
          num={index}
        />
      ))}
    </div>
  );
}
