import React, { useState, FormEvent } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.username || !form.password) {
      alert("please fill in all fields.");
      return;
    }
    console.log(form);
    setForm({ username: "", password: "" });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        padding: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: 4,
          borderRadius: 12,
          boxShadow: 3,
          backgroundColor: "white",
          width: 350,
        }}
      >
        <Stack spacing={3}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "#B0000",
            }}
          >
            login
          </Typography>
          <TextField
            name="username"
            label="username"
            variant="outlined"
            fullWidth
            value={form.username}
            onChange={handleChange}
            sx={{
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            fullWidth
            type="password"
            value={form.password}
            onChange={handleChange}
            sx={{
              borderRadius: "12px", 
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px", 
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#FFB6C1",
              "&:hover": {
                backgroundColor: "#FF99AA",
              },
              paddingY: 1.5,
              fontSize: "1.1rem",
              borderRadius: "12px",
              textTransform: "uppercase", 
            }}
          >
            login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}