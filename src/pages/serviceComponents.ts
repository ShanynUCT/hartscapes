// Map service slugs to dynamic import functions for their component files.
// This explicit mapping avoids relying on filename-to-slug heuristics and keeps
// imports explicit and easy to maintain.
export const serviceComponents: Record<string, () => Promise<any>> = {
  "landscape-design": () => import("./services/LandscapeConstruction"),
  "pergolas": () => import("./services/Pergolas"),
  "water-features": () => import("./services/WaterFeatures"),
  "firepits-braais": () => import("./services/FirepitsBraais"),
  "retaining-walls": () => import("./services/RetainingWalls"),
  "brickwork": () => import("./services/StoneWalls"),
  "paving-brickwork": () => import("./services/PavingBrickwork"),
  "decking": () => import("./services/Decking"),
};
