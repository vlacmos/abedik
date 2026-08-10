export type CoverType = "hardcover" | "softcover";
export type PrintTech = "offset" | "digital";
export type PaperType = "cream" | "white" | "gray";

export interface CalculatorConfig {
  cover: CoverType;
  tech: PrintTech;
  paper: PaperType;
  pages: number;
  copies: number;
}

const COVER_BASE_COST: Record<CoverType, number> = {
  hardcover: 3.4,
  softcover: 0.75,
};

const PAPER_MULTIPLIER: Record<PaperType, number> = {
  cream: 1,
  white: 1.06,
  gray: 0.9,
};

const TECH_UNIT_MULTIPLIER: Record<PrintTech, number> = {
  offset: 1,
  digital: 1.35,
};

const SETUP_COST: Record<PrintTech, number> = {
  offset: 4200,
  digital: 250,
};

const PER_PAGE_RATE = 0.032;

export function estimateCost(config: CalculatorConfig) {
  const pagesFactor = config.pages / 32;
  let unitCost =
    COVER_BASE_COST[config.cover] +
    TECH_UNIT_MULTIPLIER[config.tech] * PAPER_MULTIPLIER[config.paper] * pagesFactor * PER_PAGE_RATE * 32;

  if (config.tech === "offset") {
    const scaleDiscount = Math.min(0.28, config.copies / 180000);
    unitCost *= 1 - scaleDiscount;
  }

  const total = SETUP_COST[config.tech] + unitCost * config.copies;
  return { unitCost, total };
}

export function estimateDays(config: CalculatorConfig) {
  const setupDays = config.tech === "offset" ? 3 : 1;
  const printingDays =
    config.tech === "offset" ? config.copies / 9000 : config.copies / 1400;
  const bindingDays = config.cover === "hardcover" ? 2.5 : 1;
  const pagesDays = config.pages / 420;

  const raw = setupDays + printingDays + bindingDays + pagesDays;
  const min = config.tech === "offset" ? 6 : 2;
  return Math.max(min, Math.round(raw));
}

export function formatPLN(value: number) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(value);
}
