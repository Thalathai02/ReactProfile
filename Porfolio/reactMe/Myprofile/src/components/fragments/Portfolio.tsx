import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import photo from "@/assets/images/P.png";
import { Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { imageUrl } from "@/utils/constants";

type PortfolioProps = {
  head: React.ReactNode;
  title: string;
  subtitle: string;
  i: number;
  image: string;
};
const Portfolio = ({ head, title, subtitle, image }: PortfolioProps) => {
  return (
    <Grid item xs={3} className="cursor-pointer">
      <Card sx={{ maxWidth: 277, maxheight: 300 }} className="mb-4">
        <CardMedia
          sx={{ height: 140 }}
          image={`${imageUrl}//${image}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {head}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <FavoriteIcon style={{ color: "red" }} />
            Like
          </Button>
          <Button size="small">
            <ThumbDownOutlinedIcon />
            Dislike
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Portfolio;
