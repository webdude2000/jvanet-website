import { render, screen } from "@testing-library/react";
import BusinessDetails from "../contact/BusinessDetails";

describe("BusinessDetails", () => {
  it("renders the company name", () => {
    render(<BusinessDetails />);
    expect(screen.getByText("JVANET PTY LTD")).toBeInTheDocument();
  });

  it("renders the ABN", () => {
    render(<BusinessDetails />);
    expect(screen.getByText("26 696 484 107")).toBeInTheDocument();
  });

  it("renders the location", () => {
    render(<BusinessDetails />);
    expect(screen.getByText("Brisbane, Australia")).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<BusinessDetails />);
    const link = screen.getByRole("link", { name: /hello@jvanet.com/i });
    expect(link).toHaveAttribute("href", "mailto:hello@jvanet.com");
  });

  it("renders response time notice", () => {
    render(<BusinessDetails />);
    expect(screen.getByText(/one business day/i)).toBeInTheDocument();
  });
});
