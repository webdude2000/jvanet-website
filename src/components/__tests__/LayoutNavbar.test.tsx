import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../layout/Navbar";

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Mock next/navigation
const mockPathname = jest.fn().mockReturnValue("/");
jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

describe("Layout Navbar", () => {
  beforeEach(() => {
    mockPathname.mockReturnValue("/");
  });

  it("renders the JVANET logo link to home", () => {
    render(<Navbar />);
    const homeLink = screen.getByRole("link", { name: /jvanet/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders navigation links to all pages", () => {
    render(<Navbar />);
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const productsLink = screen.getByRole("link", { name: /products/i });
    const servicesLink = screen.getByRole("link", { name: /services/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(productsLink).toHaveAttribute("href", "/products");
    expect(servicesLink).toHaveAttribute("href", "/services");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("highlights the active page link", () => {
    mockPathname.mockReturnValue("/about");
    render(<Navbar />);
    const aboutLinks = screen.getAllByRole("link", { name: /about/i });
    // Desktop nav link should have aria-current
    const activeLink = aboutLinks.find(
      (link) => link.getAttribute("aria-current") === "page"
    );
    expect(activeLink).toBeTruthy();
  });

  it("renders mobile menu toggle button", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /open menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /open menu/i });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("uses Link components with page routes, not hash anchors", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    const navLinks = links.filter(
      (link) => link.getAttribute("href") && !link.getAttribute("href")?.startsWith("mailto:")
    );
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") ?? "";
      expect(href).not.toContain("#");
      expect(href.startsWith("/")).toBe(true);
    });
  });
});
