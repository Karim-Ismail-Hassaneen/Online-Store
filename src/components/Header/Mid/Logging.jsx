import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Logging = () => {
  return (
    <>
      <Box
        sx={{
          ".MuiBox-root  ": { maxWidth: { xs: "100%", md: 1000 } },
          p: 16,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="gray">
          Get Started
        </Typography>
        <Typography variant="subtitle2" color="gray">
          Already have account?
          <span style={{ color: "#66bb6a" }}> Sign In</span>
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch", mb: 2 },
            py: 2,
            textAlign: { xs: "center", sm: "left" },
            mt: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            color="success"
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            color="success"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            color="success"
          />
          <Button
            variant="outlined"
            color="success"
            sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          >
            Submit
          </Button>
        </Box>
        <Typography variant="subtitle2">Or Sign Up With</Typography>
        <ButtonGroup
        sx={{ gap: 2, marginTop: 2 }}
          variant="outlined"
          aria-label="outlined primary button group"
          color="success"
        >
          <Button className="toogleBtn"><GoogleIcon /></Button>
          <Button className="toogleBtn"><FacebookIcon /></Button>
          <Button className="toogleBtn"><TwitterIcon/></Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Logging;
