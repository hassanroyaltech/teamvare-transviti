import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Card, styled, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (query: string, location: string, jobType: string) => void;
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputBase-root': {
    fontSize: '15px',
    fontWeight: 500,
    color: "#585D6E"
  },
  '& .MuiInputLabel-root': {
    fontSize: '15px',
    fontWeight: 500,
    color: "#585D6E"

  },
  '& .MuiSelect-root': {
    fontSize: '15px',
    fontWeight: 500,
    color: "#585D6E"
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: "none !important"
  },
}));
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [jobType, setJobType] = React.useState('');

  const handleSearch = () => {
    onSearch(query, location, jobType);
  };

  const locationOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const jobTypeOptions = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
  ];
  const jobSkills = [
    { value: 'full-time', label: 'Frontend' },
    { value: 'part-time', label: 'Backend' },
    { value: 'part-time', label: 'Graphic' },

  ];

  return (
    <>
      <Card sx={{ p: 1.5, borderRadius: '10px', boxShadow: "none !important" , mt:1.8}}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' }, // Set column for xs and row for lg
        }}
          alignItems="center"
          justifyContent="space-between"
          gap={2}>
          <StyledFormControl
            variant="outlined"
            sx={{ flex: 1, width: "100%" }}
            size="small"
          >
            <InputLabel htmlFor="query-input">Job Title, Company, or Keywords</InputLabel>
            <OutlinedInput
              id="query-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              label="Job Title, Company, or Keywords"
            />
          </StyledFormControl>
          <Box display="flex" alignItems="center" gap={2}
            sx={{ flexDirection: { xs: 'column', md: 'row' }, flex: { xs: 1, md: 1 }, width: { xs: "100%", lg: "auto" } }}
          >
            <StyledFormControl variant="outlined" sx={{ minWidth: 150, borderLeft: { xs: "none", lg: "1px solid #E9ECEF" }, width: { xs: "100%", md: "auto" } }} size="small">
              <InputLabel id="location-label">Select Location</InputLabel>
              <Select
                labelId="location-label"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Select Location"
                IconComponent={ExpandMore}
                sx={{
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                {locationOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <StyledFormControl variant="outlined" sx={{ minWidth: 150, borderLeft: { xs: "none", md: "1px solid #E9ECEF" }, width: { xs: "100%", md: "auto" } }} size="small">
              <InputLabel id="jobType-label">Job Type</InputLabel>
              <Select
                labelId="jobType-label"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                label="Job Type"
                IconComponent={ExpandMore}
                sx={{
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                {jobTypeOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<SearchIcon />} sx={{ width: 140, borderRadius: "8px",fontSize:14 }}>
              Search
            </Button>
          </Box>
        </Box>
      </Card>
      <Box mt={1.8} 
  sx={{ 
    display: { xs: 'block', sm: 'flex', lg: 'flex' }, 
    alignItems: 'center', 
    gap: 1, 
    flexWrap: 'wrap' 
  }}>
        <Typography fontSize={14} fontWeight={500} color={"#737A91"}>Similar:</Typography>
        <Box sx={{ display: { xs: 'flex' }, gap:1, alignItems:"center"  ,  flexWrap: 'wrap'  }}>
          {jobSkills.map((jobSkill, index) => (
            <Button key={index} variant="outlined"  sx={{height:30, fontSize:"12px", color:"#737A91", borderColor:"#737A91"}}>
              {jobSkill.label} {/* Assuming jobSkill is a string or you can display its value */}
            </Button>
          ))}

        </Box>
      </Box>

    </>
  );
};

export default SearchBar;
