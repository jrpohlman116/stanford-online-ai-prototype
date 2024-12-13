import { SchemaType } from "@google/generative-ai";

export const schema = {
  type: SchemaType.OBJECT,
  properties: {
    industryOverview: {
      type: SchemaType.STRING,
      description: "A brief description of the industry.",
      nullable: false,
    },
    marketTrends: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.STRING,
        description: "Key developments shaping the industry.",
      }
    },
    demographics: {
      type: SchemaType.OBJECT,
        description: "demographics of the target user segment",
        properties: {
          age: {
            type: SchemaType.STRING,
            description: "typical age range",
            nullable: false,
          },
          location: {
            type: SchemaType.STRING,
            description: "top three locations by US state",
            nullable: false,
          },
          occupation: {
            type: SchemaType.STRING,
            description: "typical occupations of the user segment",
            nullable: false,
          }
        }
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
    marketSize: {
      type: SchemaType.ARRAY,
      items: {
        description: "market sizes per year for the given company's industry from 2020 to 2024",
        type: SchemaType.OBJECT,
        properties: {
          year: {
            type: SchemaType.INTEGER,
            description: "year of industry market size",
            nullable: false,
          },
          size: {
            type: SchemaType.NUMBER,
            description: "market size in USD",
            nullable: false
          },
        }
      }
    },
    competitors: {
      type: SchemaType.ARRAY,
      items: {
        type: SchemaType.OBJECT,
        description: "top competitors of the given company",
        properties: {
          name: {
            type: SchemaType.STRING,
            description: "name of competitor",
            nullable: false,
          },
          product: {
            type: SchemaType.STRING,
            description: "product the competitor sells",
            nullable: false,
          },
          price: {
            type: SchemaType.STRING,
            description: "pricing model of the product",
            nullable: false,
          },
          features: {
            type: SchemaType.STRING,
            description: "a list of product features",
            nullable: false,
          },
          strengths: {
            type: SchemaType.STRING,
            description: "Strengths describe what an organization excels at and what separates it from the competition",
            nullable: false,
          },
          weaknesses: {
            type: SchemaType.STRING,
            description: "Weaknesses stop an organization from performing at its optimum level. They are areas where the business needs to improve to remain competitive",
            nullable: false,
          },
          opportunities: {
            type: SchemaType.STRING,
            description: "Opportunities refer to favorable external factors that could give an organization a competitive advantage. - who might most value their stengths? What trends are in their favor? ",
            nullable: false,
          },
        }
      },
      required: [],
    },
  }
};

export function agentPrompt(company) { 
  return `I want you to act as a market trend analyst and generate a detailed analysis based on the industry of ${company}. 
  Your output must strictly follow the provided schema, ensuring that all required fields are completed with accurate and relevant information. 
  Instructions for Generating the Response:
  Identify the industry based on the company name or description provided by the user.
  - Populate all fields in the schema with relevant and accurate data, ensuring no fields are left empty or incomplete.
  - Use a professional, analytical tone and provide concise, actionable insights.
  - For fields requiring arrays (e.g., market sizes, trendingKeywords, and competitors), provide a list of at least 5-10 items as examples.
  `
};