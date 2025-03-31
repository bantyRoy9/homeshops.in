import type { LucideProps } from "lucide-react";

export function DeliveryIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h2l.5 5" />
      <path d="M7 8h11l2 5" />
      <path d="M19.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M9.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M5 17H3v-5h4" />
      <path d="M17 13h4" />
      <path d="M7.5 15h11" />
    </svg>
  );
}

export function LocationIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function SupportIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 16.98h-.76a2 2 0 0 1-1.82-1.17l-.1-.25a2 2 0 0 1 1.1-2.47l.76-.29a1 1 0 0 0 .55-1.28l-2.42-6.5a1 1 0 0 0-1.28-.55l-.76.29a2 2 0 0 1-2.47-1.1l-.25-.99a2 2 0 0 1 1.1-2.47l.76-.29a1 1 0 0 0 .55-1.28l-1.05-2.82a1 1 0 0 0-1.28-.55l-.76.29a2 2 0 0 1-2.47-1.1L5.86 3a2 2 0 0 1 1.1-2.47l.76-.29a1 1 0 0 0 .55-1.28l-1.05-2.82a1 1 0 0 0-1.28-.55L2.1.18" />
      <path d="M18 17v5" />
      <path d="M18 22h4" />
      <circle cx="13" cy="9" r="5" />
      <path d="M19.24 7.59A7.74 7.74 0 0 1 21 12a7.77 7.77 0 0 1-1 3.89" />
      <path d="M22 22 2 2" />
    </svg>
  );
}

export function AppIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
