import { LucideIcon } from "lucide-react";

export interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  info: string | string[];
  subinfo?: string;
}
