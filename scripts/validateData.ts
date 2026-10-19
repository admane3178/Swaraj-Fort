import { promises as fs } from "fs";
import path from "path";
import { forts } from "../src/data/forts";

interface ValidationError {
  fortId: string;
  messages: string[];
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function validate(): Promise<void> {
  const errors: ValidationError[] = [];
  const idSet = new Set<string>();
  for (const fort of forts) {
    const fortErrors: string[] = [];
    // unique id
    if (idSet.has(fort.id)) {
      fortErrors.push("Duplicate id");
    } else {
      idSet.add(fort.id);
    }
    // required fields check (non‑empty strings)
    const requiredStringFields: (keyof typeof fort)[] = ["name", "district", "type", "image", "shortDescription", "history", "significance"];
    for (const field of requiredStringFields) {
      const value = fort[field];
      if (typeof value !== "string" || value.trim() === "") {
        fortErrors.push(`${field} is missing or empty`);
      }
    }
    // numeric fields check
    if (typeof fort.altitude !== "number" || Number.isNaN(fort.altitude)) {
      fortErrors.push("altitude is not a valid number");
    }
    if (typeof fort.lat !== "number" || Number.isNaN(fort.lat)) {
      fortErrors.push("lat is not a valid number");
    }
    if (typeof fort.lng !== "number" || Number.isNaN(fort.lng)) {
      fortErrors.push("lng is not a valid number");
    }
    // image file existence (relative to project root)
    const imagePath = path.resolve(__dirname, "..", fort.image);
    if (!(await fileExists(imagePath))) {
      fortErrors.push(`Image file not found: ${fort.image}`);
    }
    if (fortErrors.length > 0) {
      errors.push({ fortId: fort.id, messages: fortErrors });
    }
  }

  if (errors.length > 0) {
    console.error("Data validation failed with the following errors:");
    for (const err of errors) {
      console.error(`- Fort ${err.fortId}:`);
      for (const msg of err.messages) {
        console.error(`   • ${msg}`);
      }
    }
    process.exit(1);
  } else {
    console.log("All forts data are valid.");
    process.exit(0);
  }
}

validate().catch((e) => {
  console.error("Unexpected error during validation:", e);
  process.exit(1);
});
