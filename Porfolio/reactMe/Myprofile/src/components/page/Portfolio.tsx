import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import photo from "@/assets/images/P.png";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { getportfolio, PortfolioSelector } from "@/store/slices/PortfolioSlice";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import Portfolio from "../fragments/Portfolio";

export default function MediaCard() {
  const portfolioReducer = useSelector(PortfolioSelector);
  const dispatch = useAppDispatch();

  console.log(portfolioReducer);

  const renderProductRowsData = () => {
    const { portfolioAllResult } = portfolioReducer;
    useEffect(() => {
      dispatch(getportfolio(""));
    }, [dispatch]);
    return (
      <Container
        className="h-[80vh] overflow-y-scroll p-4"
        sx={{ display: "flex" }}
      >
        <Grid container spacing={1} className="pt-2">
          {portfolioAllResult !== null &&
            portfolioAllResult.map((item: any, i: number) => (
              <Portfolio
                head={item.head}
                title={item.title}
                subtitle={""}
                i={i}
                image={item.img}
              ></Portfolio>
            ))}
        </Grid>
      </Container>
    );
  };

  return (
    <Grid item xs={8} className="overflow-hidden">
      {renderProductRowsData()}
      <Grid item xs={8} className="overflow-hidden">
        <Button variant="contained" color="success">
          add Item
        </Button>
      </Grid>
    </Grid>
  );
}
