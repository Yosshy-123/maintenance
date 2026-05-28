export type MaintenanceCopy = {
  title: string;
  description: string;
  actionLabel: string;
  note: string;
};

export const maintenanceCopy = {
  title: "We’ll Be Back Soon",
  description:
    "Our system is currently undergoing maintenance. We’re working to improve your experience and will be back shortly.",
  actionLabel: "Refresh Page",
  note: "Thank you for your patience.",
} satisfies MaintenanceCopy;
