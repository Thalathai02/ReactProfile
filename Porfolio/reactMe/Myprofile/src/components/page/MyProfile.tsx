import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MyPhoto from "@/assets/images/P.png";
import { Container, Grid, Stack } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Container className="h-[100vh]  p-8">
      <Grid container spacing={1} className="pt-4">
        <Card
          sx={{
            minWidth: 275,
            mb: 2.5,
          }}
        >
          <CardContent>
            <Stack direction={"row"} justifyContent={"center"}>
              <Stack direction={"column"} className=" md:max-w-2xl mb-6">
                <Box>
                  <img
                    className="rounded-[20%] justify-center text-center sm:w-40 xl:w-full "
                    src={MyPhoto}
                  />
                  <Typography
                    className="justify-center text-center text-base text-xl"
                    color="text.secondary"
                    gutterBottom
                  >
                    " Good day good time"
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"column"} justifyContent={"center"}>
                <Box
                  sx={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    color="text.secondary"
                    className="justify-center text-center text-base text-xl"
                  >
                    Thalathai Singwong
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className=" justify-center text-center text-base text-xl"
                  >
                    Age:25
                  </Typography>
                  <br></br>
                  <Typography
                    color="text.secondary"
                    className=" justify-center text-center text-base text-xl"
                  >
                    Skills :
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className=" justify-center text-center text-base text-xl"
                  >
                    Programming language :HTML5 ,JAVASCRIPT,PHP,ASP.NET Core,
                    SQL SEVER 
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className=" justify-center text-center text-base text-xl"
                  >
                    Tools : VS Code , HeidiSQL ,MSSQL
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    color="text.secondary"
                    className=" justify-end text-center text-base text-xl"
                  >
                    Contact
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className=" justify-end text-center text-base text-xl"
                  >
                    Phone: 082 405 8313.
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className=" justify-end text-center text-base text-xl"
                  >
                    Email : thalathaisingwong@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
