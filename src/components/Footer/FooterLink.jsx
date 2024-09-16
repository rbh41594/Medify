import { Link, Stack } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Changed the icon for uniqueness

export default function FooterLink({ children }) {
    return (
        <Link
          underline="hover" 
          sx={{
            color: '#ffffff', 
            fontWeight: 400,   
            fontSize: '1rem'  
          }}
        >
            <Stack direction="row" spacing={1} alignItems="center"> 
                <ArrowForwardIosIcon fontSize="small" />  
                {children}
            </Stack>
        </Link>
    );
}
