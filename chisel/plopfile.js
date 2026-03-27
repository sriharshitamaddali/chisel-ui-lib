import path from "path";

export default function (plop) {
  plop.setGenerator("component", {
    description: "Prompt to generate a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
      {
        type: "list",
        name: "type",
        message: "Choose the type of component (primitive or composite)",
        choices: ['primitive', 'composite'],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "plop-templates/component/Component.types.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/component/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/component/Component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/component/Component.stories.tsx.hbs",
      }
    ],
  });
}
