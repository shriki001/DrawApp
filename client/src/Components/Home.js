import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import Shape from "./Shape";
import AutoShape from "./AutoShape";
import { GetColor, ResetColor } from "../store/actions/colorsAction";
import { GetShape, ResetShape } from "../store/actions/shapesAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#292929",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  border: "1px dotted white",
  color: "white",
  cursor: "pointer",
}));

export default function Home() {
  const dispatch = useDispatch();
  const [color, shape] = useSelector(({ color, shape }) => [
    color.color,
    shape.shape,
  ]);

  useEffect(() => {
    dispatch(GetColor());
    dispatch(GetShape());
  }, []);

  return (
    <Paper style={{ backgroundColor: "#292929" }}>
      <Grid container spacing={4} xs={12} style={{ margin: "auto" }}>
        <Grid
          item
          xs={12}
          style={{
            height: window.screen.height * 0.6,
            margin: 10,
            padding: 0,
            border: "1px dotted white",
          }}
        >
          <Shape color={color} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{
            height: window.screen.height * 0.2,
            paddingLeft: 0,
          }}
        >
          <Grid item xs={3} style={{ padding: "20px 10px" }}>
            <Item
              onClick={(_) => {
                dispatch(ResetColor());
                dispatch(ResetShape());
                dispatch(GetColor());
                dispatch(GetShape());
              }}
            >
              Reset
            </Item>
          </Grid>
          <Grid item xs={3} style={{ padding: "20px 10px" }}>
            <Item onClick={(_) => dispatch(GetShape())}>
              Choose Randome Shape
            </Item>
          </Grid>
          <Grid item xs={3} style={{ padding: "20px 10px" }}>
            <Item onClick={(_) => dispatch(GetColor())}>
              Choose Randome Color
            </Item>
          </Grid>
          <Grid item xs={3}>
            <AutoShape color={color} shape={shape} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
