import { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { submitUserEmail } from "../../helpers/api-util";

function NewsletterRegistration() {
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const userEmail = emailInputRef.current.value;

    if (userEmail.includes("@")) {
      const reqBody = {
        email: userEmail,
      };
      console.log(reqBody)
      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
