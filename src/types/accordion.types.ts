 
export  type AccordionItem =  {
    id: string;
    title: string;
    content: string;
    hasActions?: boolean;
    actions?: { label: string; onClick: () => void }[];
  }