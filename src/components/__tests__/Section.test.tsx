import { render, screen } from "@testing-library/react";
import Section from "../Section";

describe("Section", () => {
  it("renders children", () => {
    render(<Section>Section content</Section>);
    expect(screen.getByText("Section content")).toBeInTheDocument();
  });

  it("renders as a section element", () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("applies id when provided", () => {
    const { container } = render(<Section id="test-section">Content</Section>);
    expect(container.querySelector("#test-section")).toBeInTheDocument();
  });

  it("renders divider when specified", () => {
    const { container } = render(<Section divider>Content</Section>);
    expect(container.querySelector(".section-line")).toBeInTheDocument();
  });

  it("does not render divider by default", () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector(".section-line")).not.toBeInTheDocument();
  });
});
