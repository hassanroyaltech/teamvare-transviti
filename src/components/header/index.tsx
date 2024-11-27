import { Box, Container, Button, InputBase, Avatar, InputAdornment, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon for mobile menu
import CloseIcon from '@mui/icons-material/Close'; // Close icon for Drawer
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}
    >
      <Container
        sx={{
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          height: 70,
        }}
      >
        {/* Logo */}
        <Box flex={1} display={"flex"} alignItems={"center"}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src="/logo.png" height={38} alt="Company Logo" />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' }, // Hide on small screens
              gap: { xs: 1, lg: 2.5 },
              marginLeft: { xs: '0', md: '37px' },
            }}
          >
            <Typography
              component={Link}
              to="/jobs"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Find Jobs
            </Typography>
            <Typography
              component={Link}
              to="/companies"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Top Companies
            </Typography>
            <Typography
              component={Link}
              to="/tracker"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Job Tracker
            </Typography>
            <Typography
              component={Link}
              to="/calendar"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >            My Calendar
            </Typography>
            <Typography
              component={Link}
              to="/documents"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Documents
            </Typography>
            <Typography
              component={Link}
              to="/messages"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Messages
            </Typography>
            <Typography
              component={Link}
              to="/notifications"
              sx={{ fontSize: { xs: "10px", lg: "16px !important" }, fontWeight: '500', textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
            >
              Notifications
            </Typography>
          </Box>
        </Box>

        {/* Search Bar and Actions */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.9,
            marginLeft: { xs: "10px", lg: "60px !important" }
          }}
        >
          {/* Search Input */}
          <InputBase
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9e9e9e' }} fontSize={"small"} />
              </InputAdornment>
            }
            sx={{
              bgcolor: '#F6F9FF',
              px: 2,
              py: 0.5,
              borderRadius: '5px',
              width: { xs: 150, lg: 261 },
              fontSize: { xs: "14px", xl: "16px !important" },
              fontWeight: '500'
              // Smaller width on mobile
            }}
          />

          {/* Resume Builder Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              width: { xs: "auto", lg: "147px" }, // Hide on extra small screens
              fontSize: { xs: "14px", xl: "16px !important" }
            }}
          >
            Resume Builder
          </Button>

          {/* User Avatar */}
          <Avatar alt="User Profile" src="/user-avatar.png" sx={{ width: 40, height: 40, display: { xs: 'inline-flex', sm: 'flex' } }} />

          {/* Mobile Menu Icon */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'inline-flex', md: 'none' }, // Show only on small screens
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <Box>Menu</Box>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem button component={Link} to="/jobs">
              <ListItemText primary="Find Jobs" />
            </ListItem>
            <ListItem button component={Link} to="/companies">
              <ListItemText primary="Top Companies" />
            </ListItem>
            <ListItem button component={Link} to="/tracker">
              <ListItemText primary="Job Tracker" />
            </ListItem>
            <ListItem button component={Link} to="/calendar">
              <ListItemText primary="My Calendar" />
            </ListItem>
            <ListItem button component={Link} to="/documents">
              <ListItemText primary="Documents" />
            </ListItem>
            <ListItem button component={Link} to="/messages">
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button component={Link} to="/notifications">
              <ListItemText primary="Notifications" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
