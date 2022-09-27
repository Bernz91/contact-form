import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/button";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  const [characterCount, setCharacterCount] = useState(120);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({ mode: "onTouched" });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setCharacterCount(120);
    alert("Your message has been sent");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          {/* first row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Name:</label>
            <input
              {...register("firstName", {
                required: "⚠ Name is required",
                pattern: {
                  value: /^[-a-zA-Z@.+_]+$/i,
                  message: "⚠ Please enter a valid first name",
                },
              })}
            />
            <div className="validation-error">{errors.firstName?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* second row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Email:</label>
            <input
              {...register("email", {
                required: "⚠ Email Address is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "⚠ Please enter a valid email",
                },
              })}
            />
            <div className="validation-error">{errors.email?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* third row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Message:</label>
            <textarea
              maxLength="120"
              type="text"
              className="message"
              {...register("message", {
                required: "⚠ Required",
                onChange: (e) => {
                  setCharacterCount(120 - e.target.value.length);
                },
              })}
            />
            <div className="message-validation-count">
              <div className="validation-error">{errors.message?.message}</div>
              <div className="character-count">
                Character count: {characterCount}
              </div>
            </div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* fourth row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6} className="button-container">
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              disabled={!isDirty || !isValid}
            >
              Send
            </Button>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default ContactForm;
