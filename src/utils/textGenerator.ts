const paragraphs = [
  "The art of programming is the skill of controlling complexity. Good programming is not about writing code that simply works; it's about writing code that is clear, maintainable, and efficient. A great programmer thinks not only about solving the immediate problem but also about how their solution will be understood and modified by others in the future.",
  "Technology continues to evolve at an unprecedented rate, transforming how we live, work, and interact with one another. From artificial intelligence and machine learning to quantum computing and blockchain, these innovations are reshaping industries and creating new possibilities that were once thought impossible.",
  "The human mind is an extraordinary instrument capable of processing vast amounts of information and making complex decisions in fractions of a second. Our ability to learn, adapt, and create sets us apart from other species and drives our continuous advancement as a civilization.",
  "Climate change represents one of the most significant challenges facing our planet today. The need for sustainable solutions and renewable energy sources has never been more critical. Scientists and engineers worldwide are working tirelessly to develop innovative technologies that can help mitigate environmental impact.",
  "The digital revolution has democratized access to information and created new opportunities for learning and collaboration. Online platforms and tools have made it possible for people from different corners of the world to work together, share knowledge, and create value in ways that were unimaginable just a few decades ago.",
  "Space exploration continues to capture our imagination and push the boundaries of human achievement. The quest to understand our universe, explore distant planets, and potentially establish human settlements beyond Earth drives technological innovation and scientific discovery.",
  "The importance of cybersecurity in our increasingly connected world cannot be overstated. As our dependence on digital systems grows, so does the need to protect sensitive information and critical infrastructure from sophisticated cyber threats.",
  "Artificial intelligence is revolutionizing industries across the board, from healthcare and finance to transportation and entertainment. Machine learning algorithms are becoming increasingly sophisticated, capable of recognizing patterns and making decisions with remarkable accuracy.",
  "The concept of remote work has transformed traditional office culture and challenged conventional notions of productivity and collaboration. Companies are adapting to new ways of working, leveraging technology to maintain connectivity and foster team engagement across physical distances.",
  "The intersection of biology and technology is opening new frontiers in medicine and healthcare. Advances in genetic engineering, biotechnology, and personalized medicine are providing new hope for treating previously incurable diseases and improving human health outcomes.",
];

export const generateParagraph = () => {
  // Combine multiple paragraphs to create a longer text
  const numberOfParagraphs = 3;
  const selectedParagraphs = [];
  const usedIndices = new Set();

  while (selectedParagraphs.length < numberOfParagraphs) {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selectedParagraphs.push(paragraphs[randomIndex]);
    }
  }

  return selectedParagraphs.join(" ");
};
