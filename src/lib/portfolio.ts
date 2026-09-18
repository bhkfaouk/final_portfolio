import rawData from "@/data/portfolio.json";
import type { PortfolioData } from "@/types/portfolio";

export function getPortfolioData(): PortfolioData {
  return rawData as PortfolioData;
}

export function formatDateRange(start: string, end: string): string {
  return `${start} — ${end}`;
}
