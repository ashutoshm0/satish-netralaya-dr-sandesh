import type { ModelOption } from "./types.ts";
import { colorTokens } from "./design/tokens.ts";

const getApiBase = (): string => {
  const maybeWindow = globalThis as typeof globalThis & {
    __REPO_CHECK_AI_API_BASE__?: string;
    __REPO_DOCTOR_API_BASE__?: string;
  };
  return (
    maybeWindow.__REPO_CHECK_AI_API_BASE__ ??
    maybeWindow.__REPO_DOCTOR_API_BASE__ ??
    "http://localhost:3001"
  );
};

export const apiBase = getApiBase();

// Browser-side fallback list used when /models is unavailable.
// Keep this aligned with the server-side curated catalog.
export const DEFAULT_MODEL_OPTIONS: ModelOption[] = [
  {
    id: "auto",
    name: "Copilot Auto",
    premium: false,
    planSummary: "All Copilot plans",
    note: "Lets Copilot choose the best model automatically.",
    isAuto: true,
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    premium: false,
    planSummary: "All Copilot plans",
  },
  {
    id: "gpt-4.1",
    name: "GPT-4.1",
    premium: false,
    planSummary: "All Copilot plans",
  },
  {
    id: "gpt-5-mini",
    name: "GPT-5 Mini",
    premium: false,
    planSummary: "All Copilot plans",
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    premium: true,
    planSummary: "Student, Pro, Pro+, Business, Enterprise",
    note: "Default model in Satish Netralaya Dr Sandesh.",
    requestMultiplier: 1,
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    premium: true,
    planSummary: "Student, Pro, Pro+, Business, Enterprise",
    requestMultiplier: 1,
  },
  {
    id: "claude-sonnet-4.6",
    name: "Claude Sonnet 4.6",
    premium: true,
    planSummary: "Student, Pro, Pro+, Business, Enterprise",
    requestMultiplier: 1,
  },
  {
    id: "claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 0.33,
  },
  {
    id: "claude-opus-4.5",
    name: "Claude Opus 4.5",
    premium: true,
    planSummary: "Legacy premium model; do not expect access on Pro",
    note: "Kept only as a conservative fallback if your runtime still reports it.",
    requestMultiplier: 3,
  },
  {
    id: "claude-opus-4.6",
    name: "Claude Opus 4.6",
    premium: true,
    planSummary: "Legacy premium model; do not expect access on Pro",
    requestMultiplier: 3,
  },
  {
    id: "claude-opus-4.7",
    name: "Claude Opus 4.7",
    premium: true,
    planSummary: "Pro+, Business, Enterprise",
    note: "Rolling out gradually in GitHub Copilot clients.",
    requestMultiplier: 7.5,
  },
  {
    id: "gpt-5.2",
    name: "GPT-5.2",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 1,
  },
  {
    id: "gpt-5.2-codex",
    name: "GPT-5.2 Codex",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 1,
  },
  {
    id: "gpt-5.3-codex",
    name: "GPT-5.3 Codex",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    note: "Strong code-focused analysis.",
    requestMultiplier: 1,
  },
  {
    id: "gpt-5.4",
    name: "GPT-5.4",
    premium: true,
    planSummary: "Pro, Pro+, Business, Enterprise",
    requestMultiplier: 1,
  },
  {
    id: "gpt-5.4-mini",
    name: "GPT-5.4 Mini",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 0.33,
  },
  {
    id: "gpt-5.4-nano",
    name: "GPT-5.4 Nano",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 0.25,
  },
  {
    id: "gpt-5.5",
    name: "GPT-5.5",
    premium: true,
    planSummary: "Pro+, Business, Enterprise",
    note: "Latest GPT rollout for complex agentic work.",
    requestMultiplier: 7.5,
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 1,
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 0.33,
  },
  {
    id: "gemini-3.1-pro",
    name: "Gemini 3.1 Pro",
    premium: true,
    planSummary: "Student and paid Copilot plans; availability can depend on client and policy",
    requestMultiplier: 1,
  },
  {
    id: "grok-code-fast-1",
    name: "Grok Code Fast 1",
    premium: true,
    planSummary: "Availability varies by plan, client, and rollout",
    requestMultiplier: 0.25,
  },
  {
    id: "raptor-mini",
    name: "Raptor Mini",
    premium: true,
    planSummary: "Availability varies by plan, client, and rollout",
    requestMultiplier: 0,
  },
  {
    id: "goldeneye",
    name: "Goldeneye",
    premium: true,
    planSummary: "Availability varies by plan, client, and rollout",
  },
];

export const toneByState: Record<string, string> = {
  idle: "text-slate-700 bg-slate-100 border border-slate-200",
  running: "text-amber-900 bg-amber-100 border border-amber-200",
  completed: "text-emerald-900 bg-emerald-100 border border-emerald-200",
  cancelled: "text-slate-800 bg-slate-200 border border-slate-300",
  error: "text-rose-900 bg-rose-100 border border-rose-200",
};

export const cardClass = "glass spotlight-card rounded-3xl p-5 shadow-panel";
export const selectShellClass =
  "group relative overflow-hidden rounded-2xl border border-slate-300 bg-white/90 transition focus-within:border-cobalt focus-within:ring-2 focus-within:ring-cobalt/20";
export const selectClass =
  "w-full appearance-none bg-transparent px-3 py-2.5 pr-10 text-sm font-medium text-slate-800 outline-none";

export const semanticColors = colorTokens;
