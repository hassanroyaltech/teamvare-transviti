import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

interface ProfileCardProps {
  backgroundImage: string;
  profileImage: string;
  name: string;
  roles: string;
  location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  backgroundImage,
  profileImage,
  name,
  roles,
  location,
}) => {
  return (
    <Card sx={{ maxWidth: "100%", borderRadius: "10px", overflow: "hidden", boxShadow: "none !important" }}>
      {/* Background Image Section */}
      <Box
        sx={{
          height: 100,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Profile Image */}
        <Avatar
          src={profileImage}
          alt={name}
          sx={{
            width: 88,
            height: 88,
            position: "absolute",
            bottom: -40,
            left: "50%",
            transform: "translateX(-50%)",
            border: "4px solid white",
          }}
        />
      </Box>
      {/* Content Section */}
      <CardContent sx={{ textAlign: "center", mt: 3, pb: "16px !important" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "500", fontSize: 14 }}>
          {name}
        </Typography>
        <Typography sx={{
          fontWeight: 500,
          fontSize: 14,
          color: "#333333",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2, // Limits the text to 2 lines
          WebkitBoxOrient: "vertical", // Required for line clamping
          textOverflow: "ellipsis", // Adds the ellipsis
        }}
          maxWidth={236}
          m="auto">
          {roles}
        </Typography>
        <Typography variant="body2" sx={{ color: "#585D6E", fontWeight: "500", fontSize: 14 }}>
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
