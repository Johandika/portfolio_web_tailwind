import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2hw5ex1",
        "template_beo40rj",
        form.current,
        "33vCVq87JZqq6KFUV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("failed sent");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input
        type="text"
        name="user_name"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
      />
      <label>Message</label>
      <textarea name="message" />
      <input
        type="submit"
        value="Send"
      />
    </form>
  );
};
