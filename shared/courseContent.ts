import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Layers,
  Users,
  Zap,
} from "lucide-react";

export interface ModuleMeta {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: LucideIcon;
  path: string;
}

export const modules: ModuleMeta[] = [
  {
    id: 1,
    title: "The Backend Divide",
    subtitle: "Microservices & BFF",
    description:
      "Understand why we broke the monolith into microservices and how the BFF acts as the perfect mediator.",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    path: "/module/1",
  },
  {
    id: 2,
    title: "The Frontend Fragmentation",
    subtitle: "Micro-Frontends & SSR/Hydration",
    description:
      "Explore how the frontend mirrors the backend architecture and the weird trade-offs of server-side rendering.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    path: "/module/2",
  },
  {
    id: 3,
    title: "Measuring Success",
    subtitle: "Performance & SEO",
    description:
      "Deep dive into Core Web Vitals, Technical SEO, and the metrics that matter for modern web applications.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    path: "/module/3",
  },
  {
    id: 4,
    title: "The Implementation Playbook",
    subtitle: "Migration & Code-Splitting",
    description:
      "Learn the Strangler Fig Pattern, Module Federation, and how to compose the pieces together.",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    path: "/module/4",
  },
  {
    id: 5,
    title: "The Human Element",
    subtitle: "Team & Process",
    description:
      "Discover how to maintain developer experience, consistency, and quality in a complex architecture.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    path: "/module/5",
  },
];

export const totalModules = modules.length;

export function getModuleMeta(id: number): ModuleMeta {
  const meta = modules.find(module => module.id === id);
  if (!meta) {
    throw new Error(`Unknown module id: ${id}`);
  }
  return meta;
}

export function getModuleIndex(id: number): number {
  const index = modules.findIndex(module => module.id === id);
  if (index === -1) {
    throw new Error(`Unknown module id: ${id}`);
  }
  return index;
}

export interface NavLink {
  path: string;
  label: string;
}

type ConceptNavSpec =
  | { type: "concept"; slug: string }
  | { type: "module"; moduleId: number; label?: string };

export interface ConceptMeta {
  slug: string;
  moduleId: number;
  title: string;
  subtitle: string;
  path: string;
  order: number;
  previous?: ConceptNavSpec;
  next?: ConceptNavSpec;
}

const conceptEntries: ConceptMeta[] = [
  {
    slug: "microservices",
    moduleId: 1,
    title: "Microservices Architecture",
    subtitle: "Understanding the fundamental shift from monoliths to distributed systems",
    path: "/concepts/microservices",
    order: 1,
    next: { type: "concept", slug: "service-boundaries" },
  },
  {
    slug: "service-boundaries",
    moduleId: 1,
    title: "Service Boundaries & Bounded Contexts",
    subtitle: "Defining where one service ends and another begins",
    path: "/concepts/service-boundaries",
    order: 2,
    previous: { type: "concept", slug: "microservices" },
    next: { type: "concept", slug: "domain-driven-design" },
  },
  {
    slug: "domain-driven-design",
    moduleId: 1,
    title: "Domain-Driven Design (DDD)",
    subtitle: "Aligning software architecture with business domains",
    path: "/concepts/domain-driven-design",
    order: 3,
    previous: { type: "concept", slug: "service-boundaries" },
    next: { type: "concept", slug: "cap-theorem" },
  },
  {
    slug: "cap-theorem",
    moduleId: 1,
    title: "The CAP Theorem",
    subtitle: "Understanding the fundamental trade-offs in distributed systems",
    path: "/concepts/cap-theorem",
    order: 4,
    previous: { type: "concept", slug: "domain-driven-design" },
    next: { type: "concept", slug: "service-communication" },
  },
  {
    slug: "service-communication",
    moduleId: 1,
    title: "Service Communication Patterns",
    subtitle: "Synchronous and asynchronous communication in microservices",
    path: "/concepts/service-communication",
    order: 5,
    previous: { type: "concept", slug: "cap-theorem" },
    next: { type: "concept", slug: "advanced-communication" },
  },
  {
    slug: "advanced-communication",
    moduleId: 1,
    title: "Advanced Communication Patterns",
    subtitle: "Event-driven architecture, sagas, and choreography",
    path: "/concepts/advanced-communication",
    order: 6,
    previous: { type: "concept", slug: "service-communication" },
    next: { type: "concept", slug: "backend-for-frontend" },
  },
  {
    slug: "backend-for-frontend",
    moduleId: 1,
    title: "Backend for Frontend (BFF)",
    subtitle: "Tailoring backend services for specific frontend clients",
    path: "/concepts/backend-for-frontend",
    order: 7,
    previous: { type: "concept", slug: "advanced-communication" },
    next: { type: "concept", slug: "service-discovery" },
  },
  {
    slug: "service-discovery",
    moduleId: 1,
    title: "Service Discovery",
    subtitle: "How services find and communicate with each other in dynamic environments",
    path: "/concepts/service-discovery",
    order: 8,
    previous: { type: "concept", slug: "backend-for-frontend" },
    next: { type: "concept", slug: "circuit-breaker" },
  },
  {
    slug: "circuit-breaker",
    moduleId: 1,
    title: "Circuit Breaker Pattern",
    subtitle: "Preventing cascading failures in distributed systems",
    path: "/concepts/circuit-breaker",
    order: 9,
    previous: { type: "concept", slug: "service-discovery" },
    next: { type: "module", moduleId: 1, label: "Back to Module 1" },
  },
  {
    slug: "micro-frontends",
    moduleId: 2,
    title: "Micro-Frontends",
    subtitle: "Breaking the frontend into independently deployable applications",
    path: "/concepts/micro-frontends",
    order: 1,
    previous: { type: "module", moduleId: 2, label: "Back to Module 2" },
    next: { type: "concept", slug: "server-side-rendering" },
  },
  {
    slug: "server-side-rendering",
    moduleId: 2,
    title: "Server-Side Rendering",
    subtitle: "Rendering React components on the server and sending HTML to the browser",
    path: "/concepts/server-side-rendering",
    order: 2,
    previous: { type: "concept", slug: "micro-frontends" },
    next: { type: "concept", slug: "react-fiber" },
  },
  {
    slug: "react-fiber",
    moduleId: 2,
    title: "React Fiber Architecture",
    subtitle: "Understanding React's reconciliation algorithm and rendering engine",
    path: "/concepts/react-fiber",
    order: 3,
    previous: { type: "concept", slug: "server-side-rendering" },
    next: { type: "concept", slug: "hydration" },
  },
  {
    slug: "hydration",
    moduleId: 2,
    title: "Hydration",
    subtitle: "Attaching interactivity to server-rendered HTML",
    path: "/concepts/hydration",
    order: 4,
    previous: { type: "concept", slug: "react-fiber" },
    next: { type: "concept", slug: "islands-architecture" },
  },
  {
    slug: "islands-architecture",
    moduleId: 2,
    title: "Islands Architecture",
    subtitle: "A modern approach to web architecture combining static HTML with interactive components",
    path: "/concepts/islands-architecture",
    order: 5,
    previous: { type: "concept", slug: "hydration" },
    next: { type: "concept", slug: "virtual-dom" },
  },
  {
    slug: "virtual-dom",
    moduleId: 2,
    title: "Virtual DOM",
    subtitle: "React's in-memory representation of the DOM and how it optimizes updates",
    path: "/concepts/virtual-dom",
    order: 6,
    previous: { type: "concept", slug: "islands-architecture" },
    next: { type: "concept", slug: "streaming-rendering" },
  },
  {
    slug: "streaming-rendering",
    moduleId: 2,
    title: "Streaming & Progressive Rendering",
    subtitle:
      "Sending HTML to the browser progressively instead of waiting for the entire page to render",
    path: "/concepts/streaming-rendering",
    order: 7,
    previous: { type: "concept", slug: "virtual-dom" },
    next: { type: "concept", slug: "component-composition" },
  },
  {
    slug: "component-composition",
    moduleId: 2,
    title: "Component Composition & Module Federation",
    subtitle: "Composing applications from independently deployed components",
    path: "/concepts/component-composition",
    order: 8,
    previous: { type: "concept", slug: "streaming-rendering" },
    next: { type: "concept", slug: "performance-optimization" },
  },
  {
    slug: "performance-optimization",
    moduleId: 2,
    title: "Performance Optimization",
    subtitle: "Strategies for optimizing frontend performance in modern applications",
    path: "/concepts/performance-optimization",
    order: 9,
    previous: { type: "concept", slug: "component-composition" },
  },
  {
    slug: "team-topologies",
    moduleId: 5,
    title: "Team Topologies & Conway Alignment",
    subtitle: "Designing socio-technical structures that mirror your architecture",
    path: "/concepts/team-topologies",
    order: 1,
    previous: { type: "module", moduleId: 5, label: "Back to Module 5" },
    next: { type: "concept", slug: "platform-engineering" },
  },
  {
    slug: "platform-engineering",
    moduleId: 5,
    title: "Platform Engineering",
    subtitle: "Building internal platforms that create paved roads for delivery",
    path: "/concepts/platform-engineering",
    order: 2,
    previous: { type: "concept", slug: "team-topologies" },
    next: { type: "concept", slug: "observability" },
  },
  {
    slug: "observability",
    moduleId: 5,
    title: "Observability Engineering",
    subtitle: "Constructing telemetry pipelines that support rapid diagnosis",
    path: "/concepts/observability",
    order: 3,
    previous: { type: "concept", slug: "platform-engineering" },
    next: { type: "concept", slug: "service-level-objectives" },
  },
  {
    slug: "service-level-objectives",
    moduleId: 5,
    title: "Service Level Objectives",
    subtitle: "Quantifying reliability targets and aligning them with user value",
    path: "/concepts/service-level-objectives",
    order: 4,
    previous: { type: "concept", slug: "observability" },
    next: { type: "concept", slug: "error-budgets" },
  },
  {
    slug: "error-budgets",
    moduleId: 5,
    title: "Error Budgets",
    subtitle: "Managing reliability risk with burn rates and governance policies",
    path: "/concepts/error-budgets",
    order: 5,
    previous: { type: "concept", slug: "service-level-objectives" },
    next: { type: "concept", slug: "incident-response" },
  },
  {
    slug: "incident-response",
    moduleId: 5,
    title: "Incident Response",
    subtitle: "Applying incident command and communication discipline to outages",
    path: "/concepts/incident-response",
    order: 6,
    previous: { type: "concept", slug: "error-budgets" },
    next: { type: "concept", slug: "developer-experience" },
  },
  {
    slug: "developer-experience",
    moduleId: 5,
    title: "Developer Experience",
    subtitle: "Designing internal products that keep engineers in flow",
    path: "/concepts/developer-experience",
    order: 7,
    previous: { type: "concept", slug: "incident-response" },
    next: { type: "module", moduleId: 5, label: "Back to Module 5" },
  },
];

const conceptMap = new Map(conceptEntries.map(concept => [concept.slug, concept]));

function toNavLink(spec: ConceptNavSpec | undefined): NavLink | undefined {
  if (!spec) {
    return undefined;
  }

  if (spec.type === "module") {
    const module = getModuleMeta(spec.moduleId);
    return {
      path: module.path,
      label: spec.label ?? `Module ${module.id}: ${module.title}`,
    };
  }

  const concept = conceptMap.get(spec.slug);
  if (!concept) {
    throw new Error(`Unknown concept slug: ${spec.slug}`);
  }

  return {
    path: concept.path,
    label: concept.title,
  };
}

export function getConceptPageMetadata(slug: string): {
  title: string;
  subtitle: string;
  backToModule: NavLink;
  previousConcept?: NavLink;
  nextConcept?: NavLink;
} {
  const concept = conceptMap.get(slug);
  if (!concept) {
    throw new Error(`Unknown concept slug: ${slug}`);
  }

  const module = getModuleMeta(concept.moduleId);

  return {
    title: concept.title,
    subtitle: concept.subtitle,
    backToModule: {
      path: module.path,
      label: `Module ${module.id}: ${module.title}`,
    },
    previousConcept: toNavLink(concept.previous),
    nextConcept: toNavLink(concept.next),
  };
}

export function getConceptMeta(slug: string): ConceptMeta {
  const concept = conceptMap.get(slug);
  if (!concept) {
    throw new Error(`Unknown concept slug: ${slug}`);
  }
  return concept;
}

