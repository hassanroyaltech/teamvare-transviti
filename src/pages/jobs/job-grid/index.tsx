import React, { ReactNode } from 'react'
import { JobCardItemProps } from '../../../types/job-item.types';
import JobCardItem from '../job-card-item';
import { Grid } from '@mui/material';

interface JobGridProps {
    jobData: JobCardItemProps[];
    heading:ReactNode; // Array of job objects
}

export const JobGrid: React.FC<JobGridProps> = ({ jobData ,heading}) => {
    return (
       <>
        {heading}
        <Grid container    rowGap={"8px"}   mt={1}>
            {jobData.map((job, index) => (
                <Grid
                    item
                    xs={12} // Full width on extra small screens
                    sm={6}  // Two items per row on small screens
                    md={4}  // Three items per row on medium screens
                    lg={2.4} // Five items per row on large screens
                    key={index}
                    alignContent={"center"}
                >
                    <JobCardItem {...job} />
                </Grid>
            ))}
        </Grid>
       </>
    )
}

