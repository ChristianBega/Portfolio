import React from "react";
import { useForm } from "@formspree/react";
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentAlt } from "react-icons/fa";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";

import { FormContainer, SuccessMessage, FormGrid } from "./contact.styles";
import GridItem from "../GridItem/gridItem";
import Button from "../Button/button";
import Typography from "../Typography/typography";
import ContactField from "./contactField";

// Define types for form fields
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const { isMd } = useMediaQueries();
  // Replace with your actual Formspree form ID
  const formId = import.meta.env.VITE_FORM_SPREE_ID as string;
  const [state, handleSubmit] = useForm<FormValues>(formId);

  if (state.succeeded) {
    return (
      <GridItem mb={isMd ? "192px" : "70px"} id="contact-section-success" xs={12} order={3}>
        <FormContainer>
          <SuccessMessage>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you shortly.</p>
          </SuccessMessage>
        </FormContainer>
      </GridItem>
    );
  }

  return (
    <GridItem mb={"70px"} id="contact-section" xs={12} order={3}>
      <Typography component="h2" mb="48px">
        Contact Me
      </Typography>
      <FormContainer>
        <Typography style={{ fontWeight: "700", textAlign: "center" }} component="h3">
          Let's Connect
        </Typography>
        <Typography style={{ textAlign: "center" }} component="p">
          Have a project in mind or want to chat? Send me a message!
        </Typography>

        <form style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleSubmit}>
          <FormGrid>
            <ContactField id="name" name="name" label="Name" placeholder="Your name" required icon={<FaUser />} errors={state.errors} />
            <ContactField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Your email address"
              required
              icon={<FaEnvelope />}
              errors={state.errors}
            />
          </FormGrid>
          <ContactField id="subject" name="subject" label="Subject" placeholder="What is this about?" icon={<FaPaperPlane />} errors={state.errors} />
          <ContactField
            id="message"
            name="message"
            label="Message"
            placeholder="Tell me about your project or inquiry..."
            required
            icon={<FaCommentAlt />}
            errors={state.errors}
            isTextArea
          />
          <div>
            <Button type="submit" disabled={state.submitting} variant="contained" size="md">
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </FormContainer>
    </GridItem>
  );
};

export default ContactForm;
