import { describe, expect, it } from "vitest";
import { getConceptPageMetadata, getModuleMeta, modules } from "@shared/courseContent";

describe("courseContent", () => {
  it("exposes five ordered modules", () => {
    expect(modules).toHaveLength(5);
    expect(modules.map(module => module.id)).toEqual([1, 2, 3, 4, 5]);
  });

  it("provides module metadata lookups", () => {
    const moduleTwo = getModuleMeta(2);
    expect(moduleTwo.title).toBe("The Frontend Fragmentation");
    expect(moduleTwo.path).toBe("/module/2");
  });

  it("returns concept navigation including back link", () => {
    const concept = getConceptPageMetadata("service-communication");
    expect(concept.backToModule.label).toContain("Module 1");
    expect(concept.nextConcept?.path).toBe("/concepts/advanced-communication");
  });
});
