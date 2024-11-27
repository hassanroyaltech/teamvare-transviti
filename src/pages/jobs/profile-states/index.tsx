import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 import {
    List, ListItem, ListItemText
} from '@mui/material';

interface ProfileStatsProps {
    profileVisitors: number;
    resumeViewers: number;
    myJobs: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({
    profileVisitors,
    resumeViewers,
    myJobs,
}) => {
    return (
        <Card sx={{ borderRadius:"10px",boxShadow:"none !important" }}>
            <CardContent sx={{p:"20px !important"}}>
                <List sx={{p:0}}>
                    <ListItem sx={{ borderBottom: '1px solid #E9ECEF' ,padding:"0 0 0px 0"}}>
                        <ListItemText
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                            primary="Profile Visitors"
                            secondary={profileVisitors}
                            primaryTypographyProps={{
                                fontSize: '14px',
                                fontWeight: 500,
                              }}
                              secondaryTypographyProps={{
                                color: '#0154AA',  // This applies the color to the secondary text
                                fontSize: '16px',
                                fontWeight: 500,
                              }}
                        
                        />
                    </ListItem>
                    <ListItem sx={{ borderBottom: '1px solid #E9ECEF' ,padding:"0 0 0px 0"}}>
                        <ListItemText
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                            primary="Resume Viewers"
                            secondary={resumeViewers}
                            primaryTypographyProps={{
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                            secondaryTypographyProps={{
                                color: '#0154AA',  // This applies the color to the secondary text
                                fontSize: '16px',
                                fontWeight: 500,
                              }}
                        />
                    </ListItem>
                    <ListItem sx={{padding:"0 0 0px 0"}}>
                        <ListItemText
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                            primary="My Jobs"
                            secondary={myJobs}
                            primaryTypographyProps={{
                                fontSize: '14px',
                                fontWeight: 500,
                            }}
                            secondaryTypographyProps={{
                                color: '#0154AA',  // This applies the color to the secondary text
                                fontSize: '16px',
                                fontWeight: 500,
                              }}
                        />
                    </ListItem>
                </List>

            </CardContent>
        </Card>
    );
};

export default ProfileStats;