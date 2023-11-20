import Container from "../../components/Container";
import Button from "../../components/Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    setIsLoading(true);

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
          toast.success(
            "Your message has been sent, I will reply to your message soon.",
            { duration: 5000 }
          );
          reset(); //reset form setelah sukses mengirim pesan
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Your message failed to send, send it manually to johanelyosse@gmail.com."
          );
        }
      )
      .finally(() => {
        setIsLoading(false); // Set isLoading menjadi false saat pengiriman selesai
      });
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <Container className="py-20 flex flex-col justify-center items-center gap-8 sm:gap-16 mb-32">
        <h2 className="font-SpaceMono text-4xl underline">Contact</h2>
        <form
          className="w-full flex flex-col font-SpaceMono gap-5 sm:gap-10"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-10">
            <div className="flex flex-col flex-1">
              <label htmlFor="fullname">Full Name</label>
              <input
                {...register("user_name", {
                  required: "Full name is required",
                })}
                name="user_name"
                id="fullname"
                type="text"
                placeholder="Johandika Syahputra Lubis"
                autoComplete="on"
                className="text-Black p-4 sm:p-6 rounded-md mt-1 focus:ring-4 focus:ring-RedDarkest focus:shadow-2xl focus:shadow-RedDarkest focus:ring-opacity-80"
              />
              {errors.user_name && (
                <p className="text-RedDarkest mt-[6px]">{errors.user_name.message}</p>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="email">Email Address</label>
              <input
                {...register("user_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                name="user_email"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                autoComplete="email"
                className="text-Black  p-4 sm:p-6 rounded-md mt-1 focus:ring-4 focus:ring-RedDarkest focus:shadow-2xl focus:shadow-RedDarkest focus:ring-opacity-80"
              />
              {errors.user_email && (
                <p className="text-RedDarkest mt-[6px]">{errors.user_email.message}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message">More information</label>
            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              type="text"
              id="message"
              name="message"
              placeholder="Hello, I've got a project that i'd like to discuss further..."
              className="mt-1 w-full rounded-md  focus:ring-4 focus:ring-RedDarkest focus:shadow-2xl focus:shadow-RedDarkest focus:ring-opacity-80 text-Black p-4 sm:p-6 "
              maxLength="5000"
              rows="5"
            />
            {errors.message && (
              <p className="text-RedDarkest ">{errors.message.message}</p>
            )}
          </div>
          <Button
            text={isLoading ? "Sending..." : "SUBMIT"}
            className={
              isLoading
                ? "font-SpaceMono text-lg tracking-widest self-center opacity-40"
                : "font-SpaceMono text-lg tracking-widest self-center"
            }
            type="submit"
            value="Send"
            disabled={isLoading}
          />
        </form>
      </Container>
    </>
  );
};

export default Contact;
