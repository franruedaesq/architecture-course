import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import BigWordAlert from "../BigWordAlert";

describe("BigWordAlert", () => {
  it("renders the provided term and definition", () => {
    const html = renderToString(
      <BigWordAlert term="Latency" definition="The time it takes for data to travel." />,
    );

    expect(html).toContain("BIG WORD ALERT");
    expect(html).toContain("Latency");
    expect(html).toContain("The time it takes for data to travel.");
  });
});
