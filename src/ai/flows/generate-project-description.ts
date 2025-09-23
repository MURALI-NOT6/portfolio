'use server';

/**
 * @fileOverview An AI agent that generates project descriptions based on keywords and project details.
 *
 * - generateProjectDescription - A function that generates project descriptions.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the project, separated by commas.'),
  projectDetails: z
    .string()
    .describe('Detailed information about the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated project description.'),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a professional copywriter specializing in creating engaging portfolio project descriptions.

  Based on the provided keywords and project details, generate a compelling and informative description for the project.
  Incorporate relevant skills and technologies into the description.

  Keywords: {{{keywords}}}
  Project Details: {{{projectDetails}}}

  Description:`, // Ensure this is named 'Description:'
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
