import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";


const HelpCenter: React.FC = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden p-20" >
      <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439')] bg-cover bg-center filter blur-md"></div>

      <div className="relative flex flex-col items-center md:p-10">
        <h1 className="md:text-5xl text-[white] font-medium p-2 text-wrap text-center text-3xl min-w-[250px]" data-aos="fade-up" >
          HELP CENTER
        </h1>
        <p className="text-[white] p-2 text-wrap text-center text-base min-w-[300px] "  data-aos="fade-up">
          Let us know how we may help you?
        </p>
      </div>

      <form className="relative z-10 flex justify-center py-6 pb-10"  data-aos="fade-up">
        <TextField
          variant="outlined"
          placeholder="Search for answers..."
          fullWidth
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "2px 0px",
            borderRadius: "28px",
            width: "700px",
            minWidth: "300px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              paddingInline: "40px",
              fontSize: "18px",
              color: "#929292",
              fontWeight: "500",
            },
            "& .MuiInputBase-root": {
              paddingRight: "3px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    padding: "15px 40px",
                    borderRadius: "28px",
                    fontSize: "14px",
                    fontWeight: "600",
                    minWidth: "50px",
                    transition:
                      "background-color 0.5s, transform 0.5s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#E0E0FF",
                      color: "#000000",
                    },
                  }}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </section>
  );
};

export default HelpCenter;
