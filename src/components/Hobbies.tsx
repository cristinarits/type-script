import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

interface MinustProps {
  name?: string;
}

const Minust: React.FC<MinustProps> = ({ name }) => {
  const hobbies = ["gaming", "learning random stuff", "walks in the nature"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        padding: 2,
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 12,
          boxShadow: 3,
          backgroundColor: "white",
          width: 450,
        }}
      >
        <Stack spacing={3}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#B0000",
            }}
          >
            {name || "cristina rits"}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "#333",
            }}
          >
            minu huvid/hobid
          </Typography>

          <Box
            component="ul"
            sx={{
              display: "block",
              border: "1px solid #FFB6C1",
              backgroundColor: "#FFEBF0",
              padding: "10px 15px",
              borderRadius: 10,
              listStyleType: "none",
              textAlign: "center",
            }}
          >
            {hobbies.map((hobby, index) => (
              <Typography
                key={index}
                component="li"
                sx={{
                  marginBottom: "8px",
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                {hobby}
              </Typography>
            ))}
          </Box>

          <Box
            component="form"
            sx={{
              marginTop: 3,
            }}
          >
            <Stack spacing={3}>
              <TextField
                label="email"
                name="email"
                type="email"
                required
                variant="outlined"
                fullWidth
              />

              <TextField
                label="sõnum"
                name="message"
                multiline
                rows={4}
                required
                variant="outlined"
                fullWidth
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
                  borderRadius: 10,
                }}
              >
                saada sõnum
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Minust;