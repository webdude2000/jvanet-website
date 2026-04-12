import { render, screen } from "@testing-library/react";
import Container from "../Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(<Container>Content</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("max-w-6xl");
    expect(el.className).toContain("mx-auto");
    expect(el.className).toContain("px-6");
  });

  it("renders as div by default", () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("renders as section when specified", () => {
    const { container } = render(<Container as="section">Content</Container>);
    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("accepts custom className", () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("custom-class");
  });
});
