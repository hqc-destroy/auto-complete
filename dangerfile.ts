import { danger, markdown } from "danger";
import * as fs from "fs";
import {
  createSourceFile,
  forEachChild,
  isFunctionExpression,
  isPropertyAssignment,
  isStringLiteral,
  Node,
  PropertyAssignment,
  ScriptTarget,
  SourceFile,
  TransformerFactory,
  visitEachChild,
  visitNode,
} from "typescript";

export const specTransformer: TransformerFactory<SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (node: Node) => {
      if (isPropertyAssignment(node)) {
        const typedNode = node as PropertyAssignment;
        if (typedNode.name.getText() === "script") {
          console.log(typedNode.initializer.getText());
        }
      }
      return visitEachChild(node, visitor, context);
    };
    return visitNode(sourceFile, visitor);
  };
};

const getAllScripts = (fileContent: Node) => {
  const scripts: string[] = [];
  const functions: [string, string][] = [];
  const pairs: [string, [string, string]][] = [];

  let isLastScript = false;
  let lastScript: string;

  const visitor = (node: Node) => {
    // PropertyAssignment === Key-Value pair in object
    if (isPropertyAssignment(node)) {
      const propertyKey: string = (node.name as any).escapedText;
      // Find all scripts
      if (propertyKey === "script" && isStringLiteral(node.initializer)) {
        scripts.push(node.initializer.text);
        lastScript = node.initializer.text;
        isLastScript = true;
        console.log({
          lastScript,
          isLastScript,
        });
      }

      // Find all functions
      if (isFunctionExpression(node.initializer)) {
        console.log(isLastScript);
        if (isLastScript) {
          scripts.pop();
          pairs.push([
            lastScript,
            [
              propertyKey,
              fileContent
                .getFullText()
                .slice(node.initializer.pos, node.initializer.end),
            ],
          ]);
        } else {
          functions.push([
            propertyKey,
            fileContent
              .getFullText()
              .slice(node.initializer.pos, node.initializer.end),
          ]);
        }
      }
    }
    forEachChild(node, visitor);
  };

  visitor(fileContent);

  return {
    scripts,
    functions,
    pairs,
  };
};

// Get all changed and added files
const updatedFiles = danger.git.modified_files
  .concat(danger.git.created_files)
  .filter((file) => file.includes("dev/"));

let message = "";
if (updatedFiles.length > 0) {
  updatedFiles.forEach((fileName) => {
    const content = fs.readFileSync(fileName, { encoding: "utf-8" });
    const d = createSourceFile("temp", content, ScriptTarget.Latest);
    const allScripts = getAllScripts(d);
    console.log(allScripts.pairs);
    message += `## ${fileName}:
### Info:
${allScripts.pairs
  .map(
    ([scriptName, [key, value]]) => `- \`${scriptName}\`
**${key}:**
\`\`\`typescript
${value}`
  )
  .join("\n\n")}

### Single Scripts:
${allScripts.scripts.map((s) => `- \`${s}\``).join("\n")}

### Single Functions:
${allScripts.functions
  .map(
    ([key, value]) => `**${key}:**
\`\`\`typescript
${value}
\`\`\`
`
  )
  .join("\n")}
`;
  });
  markdown(`# Overview
${message}`);
} else {
  markdown("# No files changed ☑️");
}
