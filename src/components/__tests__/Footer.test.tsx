import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the copyright notice", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year} JVANET PTY LTD`))
    ).toBeInTheDocument();
  });

  it("renders the ABN", () => {
    render(<Footer />);
    expect(screen.getByText(/26 696 484 107/)).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /hello@jvanet.com/i });
    expect(link).toHaveAttribute("href", "mailto:hello@jvanet.com");
  });

  it("uses a footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
