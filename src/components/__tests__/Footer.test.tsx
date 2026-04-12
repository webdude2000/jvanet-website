import { render, screen } from "@testing-library/react";
import Footer from "../layout/Footer";

// Mock next/link to render as a regular anchor
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe("Footer", () => {
  it("renders the company name", () => {
    render(<Footer />);
    const matches = screen.getAllByText(/JVANET PTY LTD/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
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

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });

  it("uses a footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
