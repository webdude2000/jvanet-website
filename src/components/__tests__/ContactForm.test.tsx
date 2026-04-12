import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../contact/ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("uses a form element with mailto action", () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
    expect(form?.getAttribute("action")).toContain("mailto:hello@jvanet.com");
  });

  it("renders subject options", () => {
    render(<ContactForm />);
    const select = screen.getByLabelText(/subject/i);
    expect(select).toBeInTheDocument();
    expect(screen.getByText("General Enquiry")).toBeInTheDocument();
    expect(screen.getByText("Consulting Services")).toBeInTheDocument();
    expect(screen.getByText("Partnership")).toBeInTheDocument();
  });

  it("updates form values on input", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "John");
    expect(nameInput).toHaveValue("John");
  });

  it("requires name, email, and message fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });
});
