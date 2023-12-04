import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./main.css";

const Hero = () => {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className="slider-image">
          <img src="src\images\banner-15.jpg" alt="" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: "10%",
                textAlign: "left",
              },
              [theme.breakpoints.down("sm")]: {
                p: 8,
                textAlign: "center",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "#2B3445" }} className="type">
              White Friday Sales!
            </Typography>
            <Typography variant="h3" sx={{ color: "#2B3445" }}>
              BACKPACKS FOR
              <br /> BUSINESS MEN
            </Typography>
            <Stack
              direction={"row"}
              sx={{ color: "#2B3445", textAlign: "center", pt: 1 }}
            >
              <Typography variant="h6" className="type">
                New Price
              </Typography>

              <Link
                sx={{
                  color: "#D23F57",
                  transition: "0.2s",
                  "&:hover": { color: "#2B3445" },
                }}
                href="#"
                underline="none"
              >
                <Typography variant="h5">: $270.00</Typography>
              </Link>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                  justifyContent: { xs: "center", sm: "left" },
                }}
                variant="contained"
              >
                BROWSE
              </Button>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                  justifyContent: { xs: "center", sm: "left" },
                }}
                variant="contained"
              >
                SHOP NOW
              </Button>
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider-image">
          <img src="src\images\banner-25.jpg" alt="" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: "10%",
                textAlign: "left",
              },
              [theme.breakpoints.down("sm")]: {
                p: 8,
                textAlign: "center",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "#2B3445" }} className="type">
              White Friday Sales!
            </Typography>
            <Typography variant="h3" sx={{ color: "#2B3445" }}>
              BACKPACKS FOR
              <br /> BUSINESS MEN
            </Typography>
            <Stack
              direction={"row"}
              sx={{ color: "#2B3445", textAlign: "center", pt: 1 }}
            >
              <Typography variant="h6" className="type">
                New Price
              </Typography>

              <Link
                sx={{
                  color: "#D23F57",
                  transition: "0.2s",
                  "&:hover": { color: "#2B3445" },
                }}
                href="#"
                underline="none"
              >
                <Typography variant="h5">: $270.00</Typography>
              </Link>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                  justifyContent: { xs: "center", sm: "left" },
                }}
                variant="contained"
              >
                BROWSE
              </Button>
              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: "#222",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  color: "#fff",
                  borderRadius: "1px",
                  "&:hover": {
                    bgcolor: "#151515",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                  },
                  justifyContent: { xs: "center", sm: "left" },
                }}
                variant="contained"
              >
                SHOP NOW
              </Button>
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.3%" }}>
        <Box sx={{ position: "relative" }}>
          <img
            src="src\images\banner-17.jpg"
            alt="Product-image"
            className="img"
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "15px",
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "15px",
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src="src\images\banner-16.jpg"
            alt="Product-image"
            className="img"
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 30,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "15px",
                color: "#2B3445",
              }}
            >
              Inspier Your Unique Clothes
              <br /> Style With Us
            </Typography>
            <Link
              sx={{
                paddingTop: "10px",
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              $379.00
              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
