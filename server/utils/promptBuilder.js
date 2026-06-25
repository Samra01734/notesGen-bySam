const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMood,
  includeDiagram,
  includeChart
}) => `
You are an expert educator, curriculum designer, subject specialist, and exam preparation mentor.

Your task is to generate comprehensive, high-quality, well-structured study notes on the topic:

TOPIC: ${topic}
CLASS LEVEL: ${classLevel}
EXAM TYPE: ${examType}
REVISION MODE: ${revisionMood}

INCLUDE DIAGRAMS: ${includeDiagram ? "YES" : "NO"}
INCLUDE CHARTS: ${includeChart ? "YES" : "NO"}

========================
OUTPUT REQUIREMENTS
========================

Generate notes in clean Markdown format.

The notes must be:

- Factually accurate
- Easy to understand
- Exam-oriented
- Student-friendly
- Professionally structured
- Logically organized
- Free from repetition
- Free from unnecessary filler content

========================
NOTE STRUCTURE
========================

# Topic Title

## 1. Introduction
- Define the topic clearly.
- Explain why the topic is important.
- Provide real-world relevance.

## 2. Core Concepts
- Explain all major concepts.
- Use simple language.
- Explain technical terms where necessary.

## 3. Detailed Explanation
- Cover every important subtopic.
- Use headings and subheadings.
- Maintain logical flow.

## 4. Key Terminologies
Create a table:

| Term | Definition |
|------|------------|

Include important vocabulary related to the topic.

## 5. Step-by-Step Processes
If the topic contains procedures, workflows, algorithms, formulas, or methods:
- Explain them in numbered steps.
- Include reasoning behind each step.

## 6. Examples
Provide:
- Beginner example
- Intermediate example
- Real-world example

Explain each example thoroughly.

## 7. Visual Learning Section

${
  includeDiagram
    ? `
Create text-based diagrams using Markdown.

Example:

\`\`\`
Input
  ↓
Process
  ↓
Output
\`\`\`

Include all relevant diagrams, flowcharts, and concept maps.
`
    : `Skip diagrams.`
}

## 8. Important Points
Provide:
- Key facts
- Frequently forgotten points
- Exam-focused highlights

## 9. Common Mistakes
List common misconceptions and mistakes students make.

## 10. Memory Tricks
Provide:
- Mnemonics
- Short tricks
- Quick recall methods

## 11. Exam Preparation Section

For ${examType}:

Generate:

### Short Questions
At least 5

### Long Questions
At least 5

### Multiple Choice Questions
At least 10

Format:

Q:
A:
Explanation:

## 12. Summary

Provide:
- Bullet-point revision notes
- High-yield takeaways
- One-minute revision sheet

## 13. Quick Revision Table

| Concept | Key Point |
|----------|-----------|

## 14. Difficulty Analysis

Explain:
- Easy concepts
- Medium concepts
- Difficult concepts

Provide strategies to master difficult areas.

========================
DEPTH CONTROL
========================

Revision Mode = ${revisionMood}

If "quick":
- concise
- revision-focused

If "normal":
- balanced depth

If "detailed":
- comprehensive explanation
- deeper conceptual coverage
- additional examples

========================
FORMATTING RULES
========================

- Use proper Markdown headings.
- Use bullet points.
- Use tables where helpful.
- Use numbered lists for processes.
- Highlight important keywords using bold formatting.
- Keep sections visually clean.
- Avoid large unbroken paragraphs.

========================
QUALITY CHECK
========================

Before finalizing:
- Verify logical structure.
- Ensure completeness.
- Ensure clarity.
- Ensure exam relevance.
- Ensure professional educational quality.

Return only the final notes in Markdown format.
`;
export default buildPrompt;