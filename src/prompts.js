import { SchemaType } from "@google/generative-ai";

export const schema = {
  description: "List of lines of text to be added to the business case",
  type: SchemaType.OBJECT,
  properties: {
    industryOverview: {
      type: SchemaType.STRING,
      description: "A brief description of the industry.",
      nullable: false,
    },
    marketTrends: {
      type: SchemaType.STRING,
      description: "Key developments shaping the industry.",
      nullable: false,
    },
    demographics: {
      type: SchemaType.STRING,
      description: "Include age, gender, location, interests",
      nullable: false,
    },
    behaviors: {
      type: SchemaType.STRING,
      description: "key user behaviors and attitudes towards the industry",
      nullable: false,
    },
    socioeconomic: {
      type: SchemaType.STRING,
      description: "Discuss economic, cultural, or societal factors affecting the market.",
      nullable: false,
    },
    trendingKeywords: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.STRING,
        description: "most relevant and popular keyword associated with the industry",
        nullable: false,
      },
    },
    competitors: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.STRING,
        description: "competitor of the given company",
        nullable: false,
      },
      required: [],
    },
  }
};

export const agentPrompt = `I want you to act as a market trend analyst and generate a detailed analysis based on the industry of a user-specified company. 
  Your output must strictly follow the provided schema, ensuring that all required fields are completed with accurate and relevant information. 
  Instructions for Generating the Response:
  Identify the industry based on the company name or description provided by the user.
  - Populate all fields in the schema with relevant and accurate data, ensuring no fields are left empty or incomplete.
  - Use a professional, analytical tone and provide concise, actionable insights.
  - For fields requiring arrays (e.g., trendingKeywords and competitors), provide a list of at least 3-5 items as examples.
  `;