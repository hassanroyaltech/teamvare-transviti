import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  hasActions?: boolean;
  actions?: { label: string; onClick: () => void }[];
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.id} defaultExpanded={item.hasActions} sx={{borderRadius:"10px !important", boxShadow:"none !important"}} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
    
            sx={{minHeight:"40px !important",mb:0}}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails sx={{fontWeight:500,fontSize:14, color:"#737A91", pt:0}}>
            {item.content}
          </AccordionDetails>
          {item.hasActions && item.actions && (
            <AccordionActions>
              {item.actions.map((action, index) => (
                <Button key={index} onClick={action.onClick}>
                  {action.label}
                </Button>
              ))}
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </div>
  );
};


 