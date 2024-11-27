import { Box,Divider, Link, Typography } from '@mui/material';
import Layout from '../../components/layout';
import ProfileCard from './profile-card';
import ProfileStats from './profile-states';
import { AccordionItem } from '../../types/accordion.types';
import { AccordionGroup } from '../../components/shared/accordion';
import { JobCardItemProps } from '../../types/job-item.types';
import { JobGrid } from './job-grid';
import { Icon } from '../../components/shared/iconmoon';
import SearchBar from '../../components/serachbar';

const exampleItems: AccordionItem[] = [
    {
        id: 'My calendar',
        title: 'My calendar',
        content: 'Upcoming Interviews',
    }
];

const jobData: JobCardItemProps[] = [
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    },
    {
        title: 'UI/UX Designer',
        companyLogo: <Icon size={'21'} icon={'team'} />,
        location: 'Mountain View, CA',
        postedTime: '2 days ago',
        applicantsCount: 45,
        applyButtonLabel: 'Apply Now',
    }
];
function JobsListingPage() {
    return (
        <Layout>
            <Box width={"full"} display={{ xs: "block", sm: "flex" }} gap={2} mt={4}>
                <Box flex={1} maxWidth={{
                    xs: "100%", sm: "calc(100% - 70%)",
                    lg: "calc(100% - 74%)"
                }} display={"flex"} gap={1} flexDirection={"column"}>
                    <ProfileCard
                        backgroundImage="/images/bg-profile.png" // Replace with actual background image URL
                        profileImage="/images/bg-profile.png" // Replace with actual profile image URL
                        name="Albert Flores"
                        roles="Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer"
                        location="Clinton, Maryland"
                    />
                    <ProfileStats profileVisitors={120} resumeViewers={80} myJobs={5} />
                    <AccordionGroup items={exampleItems} />

                </Box>

                <Box flex={1} maxWidth={{ xs: "100%", sm: "calc(100% - 30%)", lg: 974 }}>

                    <Box sx={{p:{xs:1,sm:0}}}>
                    <Typography fontSize={22} fontWeight={400} color={"#333333"} lineHeight={1.3}>
                        Find your Dream Job, <span className='c-primary'>Albert!</span>
                    </Typography>
                    <Typography fontSize={15} fontWeight={500} color={"#585D6E"}>
                        Explore the latest job openings and apply for the best opportunities available today!
                    </Typography>
                    </Box>
                    <SearchBar onSearch={() => { }} />
                    <Divider sx={{ my: 2 }} />
                    <JobGrid
                        heading={
                            <Box display={"flex"} alignItems={"center"} gap={1}>
                                <Typography variant="h3" fontSize={18} fontWeight={500}>  Featured Jobs </Typography>
                                <Typography fontSize={14} fontWeight={500} className='ms-2 c-primary'>
                                    <Link >See Featured Jobs</Link></Typography>
                            </Box>
                        }
                        jobData={jobData} />         </Box>
            </Box>
        </Layout>
    );
}
export default JobsListingPage;
