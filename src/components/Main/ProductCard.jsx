
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
const ProductCard = () => {
    
  return (
    <Box sx={{ display: "flex",gap: 2.5, alignItems: "center", flexDirection: { xs: "column", sm: "row" }}}>
      <Box display={"flex"}>
        <img
          width={360}
          src="src\images\images.jpg"
          alt="Product-Image"
        />
      </Box>
      <Box  sx={{ py: 2, textAlign: { xs: "center", sm: "left" }, mt: 2 }}>
        <Typography variant="h5">MEN T-SHIRT</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $70.00
        </Typography>
        <Typography my={0.4} variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis quam facere
        </Typography>
        <Stack direction={"row"} gap={1} my={2} sx={{ justifyContent: {xs: 'center', md : "left"}}}>

        {["/src/images/final.png", "/src/images/images.jpg"].map(item => (
          <img width={90} style={{ borderRadius: 3 }} key={item} src={item} alt="" />
        ))}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartSharpIcon sx={{ mr: 1 }} fontSize="small" />
          ADD TO CART
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
// sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}
