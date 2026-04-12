import { render, screen } from "@testing-library/react";
import Footer from "../layout/Footer";

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe("Layout Footer", () => {
  it("renders navigation links to all pages", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /products/i })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: /services/i })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/contact");
  });

  it("renders the email link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /hello@jvanet.com/i });
    expect(link).toHaveAttribute("href", "mailto:hello@jvanet.com");
  });

  it("renders the copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`${year} JVANET PTY LTD`))).toBeInTheDocument();
  });

  it("renders the ABN", () => {
    render(<Footer />);
    expect(screen.getByText(/26 696 484 107/)).toBeInTheDocument();
  });

  it("has a footer navigation landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation", { name: /footer/i })).toBeInTheDocument();
  });
});
