interface ProductIconProps {
  productId: string;
}

export function ProductIcon({ productId }: ProductIconProps) {
  switch (productId) {
    case "forgeos":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M14 13L25 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
          <path d="M14 13L3 9" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
          <path d="M14 13V25" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
        </svg>
      );
    case "proposalforge":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.25" />
          <path d="M9 9H19M9 13H19M9 17H15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "aibreakingwire":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 22V16M12 22V10M17 22V14M22 22V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case "momentumai":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4C14 4 8 10 8 18L14 22L20 18C20 10 14 4 14 4Z" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
        </svg>
      );
    case "clientos":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="9" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
          <path d="M10 9V7C10 5.895 10.895 5 12 5H16C17.105 5 18 5.895 18 7V9" stroke="currentColor" strokeWidth="1.25" />
          <path d="M3 15H25" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
        </svg>
      );
    case "danang-property":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="12" height="19" stroke="currentColor" strokeWidth="1.25" />
          <rect x="16" y="12" width="8" height="13" stroke="currentColor" strokeWidth="1.25" />
          <path d="M8 10V12M12 10V12M8 15V17M12 15V17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "manilawellness":
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 6C14 6 8 12 8 18C10 20 12 21 14 22C16 21 18 20 20 18C20 12 14 6 14 6Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M14 14V22" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
          <path d="M4 16C4 16 8 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
          <path d="M24 16C24 16 20 14 14 18" stroke="currentColor" strokeWidth="1.25" opacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.25" />
          <path d="M10 14H18M14 10V18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
  }
}
