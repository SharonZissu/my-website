import { useRef } from "react";
import * as Styled from "./contact-me-form.style";
import { Flex } from "../../flex/flex.style";

function ContactMeForm({ onSubmit }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function onSubmitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    onSubmit({
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Flex direction="column">
        <Styled.Input
          type="text"
          id="name"
          placeholder="Name"
          ref={nameInputRef}
          required
        />
        <Styled.Input
          type="email"
          id="email"
          placeholder="E-Mail"
          ref={emailInputRef}
          required
        />
        <Styled.Textarea
          id="message"
          rows="10"
          placeholder="Message"
          ref={messageInputRef}
          required
        />
        <Styled.Button>Send</Styled.Button>
      </Flex>
    </form>
  );
}

export default ContactMeForm;
