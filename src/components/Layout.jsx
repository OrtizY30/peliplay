import { Grid, Pagination, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

import { AppProvider } from "../context/AppContext";
import { Translate } from "@mui/icons-material";

const Layout = () => {
  const [open, setOpen] = useState(true);
  const { dataSerie, setGenero, setPage, page } = useContext(AppProvider);
  const [openPages, setOpenPages] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Grid sx={{ gridTemplateColumns: "Repeat(2, 1fr)" }} container>
      <Grid item xs={12}>
        <Header open={open} setOpen={setOpen} />
      </Grid>
      <Grid m={"0 auto"} width={"22%"} display={{ xs: "none", md: "grid" }}>
        <Sidebar open={open} setOpen={setOpen} />
      </Grid>
      <Grid
        display={!open ? "grid" : "none"}
        position={"absolute"}
        left={200}
        zIndex={1}
        width={400}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </Grid>
      <Grid sx={{}} width={{ xs: "100%", md: "78%" }}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
