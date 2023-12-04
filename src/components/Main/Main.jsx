import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { useGetProductByNameQuery } from "../../Redux/product";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ProductCard from "./ProductCard";

const Main = () => {

  const handleAlignment = (event, newValue) => {
    setProducts(newValue)
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const allProducts = "products?populate=*"
  const menProducts = "products?populate=*&filters[productCategory][$eq]=men"
  const womenProducts = "products?populate=*&filters[productCategory][$eq]=women"
  const kidsProducts = "products?populate=*&filters[productCategory][$eq]=kids"

  const [products, setProducts] = useState(allProducts)

  const { data, error, isLoading } = useGetProductByNameQuery(products);

  if (isLoading) {
    return <Typography variant="h6">LOADING.......</Typography>
  }
  if (error) {
    // @ts-ignore
    return <Typography variant="h6">{error.message}</Typography>
  }
  if (data) {
    return (
      <Container sx={{ mt: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography variant="h4">#Featured Products</Typography>
            <Typography variant="subtitle1">
              All Our New Arrivals In A Exclusive Brand Selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={products}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ textAlign: "center", gap: 2 }}
          >
            <ToggleButton
              className="toogleBtn"
              value={allProducts}
              aria-label="left aligned"
            >
              ALL Products
            </ToggleButton>
            <ToggleButton
              className="toogleBtn"
              value={menProducts}
              aria-label="centered"
            >
              MEN Products
            </ToggleButton>
            <ToggleButton
              className="toogleBtn"
              value={womenProducts}
              aria-label="right aligned"
            >
              WOMEN Products
            </ToggleButton>
            <ToggleButton
              className="toogleBtn"
              value={kidsProducts}
              aria-label="right aligned"
            >
              KIDS Products
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
        >
          {data.data.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 300, mt: 6, mb: 6,}}>
              <Stack direction={"row"} justifyContent={"space-between"} p={2}>
                <Typography variant="h6">New</Typography>
                <IconButton className="loveBtn" size="small">
                  <FavoriteSharpIcon />
                </IconButton>
              </Stack>
              <CardMedia
                className="bgImage"
                component="img"
                width="200px"
                height="300px"
                // @ts-ignore
                image={`${item.attributes.productImage.data[0].attributes.url}`}
                alt="Image"
              />
              <CardContent sx={{ textAlign: "center", flexDirection: "row" }}>
                <Typography variant="body2" color="text.secondary">
                  {item.attributes.productTitle}
                </Typography>
                <Rating
                  sx={{ pt: 1 }}
                  name="half-rating"
                  defaultValue={item.attributes.productRating}
                  precision={0.5}
                  size="small"
                />
                <Typography variant="body2" color="text.secondary">
                  ${item.attributes.productPrice}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pt: 1 }}>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    handleClickOpen();
                  }}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartSharpIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 900 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <ProductCard />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
