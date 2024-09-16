import { Box, Stack, Typography } from "@mui/material";

export default function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      spacing={2}  
      alignItems="center"  
      sx={{
        backgroundColor: active ? "rgba(42,167,255,0.08)" : bgColor,  
        padding: 3,  
        borderRadius: 2,  
        border: active ? "1px solid #2AA7FF" : "none",  
        boxShadow: shadow ? "0 0 24px rgba(0,0,0,0.1)" : "none",  
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          height: 60,  
          width: 60,  
        }}
      />
      <Typography
        sx={{
          color: active ? "primary.main" : "#ABB6C7",  
          fontSize: 18,  
          fontWeight: active ? 600 : 400,  
        }}
      >
        {title} 
      </Typography>
    </Stack>
  );
}
