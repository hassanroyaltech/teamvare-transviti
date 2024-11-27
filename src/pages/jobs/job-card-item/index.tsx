import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { JobCardItemProps } from '../../../types/job-item.types';
import { Card } from '@mui/material';
import { Icon } from '../../../components/shared/iconmoon';



const JobCardItem: React.FC<JobCardItemProps> = ({
  title,
  companyLogo,
  location,
  postedTime,
  applicantsCount,
  applyButtonLabel,
}) => {
  return (
    <Card sx={{
        borderRadius: '10px',
        padding: '10px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        bgcolor:"white",
        boxShadow:"none",
        maxWidth:{xs:"100%",md:"182px"},
     }}>
      <Typography variant="h6" sx={{ mb: 0, fontSize:10, fontWeight:600}}>Promoted</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb:"5px" }}>
        <Box width={40} height={40} borderRadius={"9.1px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgcolor={"secondary.main"}>
        {companyLogo}
        </Box>
        <Typography  sx={{ ml: 1, fontSize:14, fontWeight:500 }}>{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
        <Icon  color={"#585D6E"} icon='map-pin' size={12} />
        <Typography sx={{ ml: 1, fontSize:12, fontWeight:500, color:"#585D6E" }}>{location}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
        <Icon icon='clock' color={"#585D6E"} size={12}/>
        <Typography  sx={{ ml: 1, fontSize:12, fontWeight:500,  color:"#585D6E" }}>{postedTime} | <span className='c-primary'>{applicantsCount}</span> applicants</Typography>
      </Box>
 
      <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between", width:"100%", mt:"10px"}}>
      <Button className="btns btn-primary c-white" sx={{  width:115, height:34, fontWeight:500, fontSize:"12px !important", borderRadius:"6.13px !important" }}>{applyButtonLabel}</Button>
      <BookmarkBorderIcon sx={{  right: 10 ,fontSize:20, color:"#AAAAAA"}} />
      </Box>
    </Card>
  );
};

export default JobCardItem;