export default function sortLines(data) {
  const sortedLines = [];

  data.forEach((line) => {
    const {
      lineStatuses: [{ statusSeverity }],
    } = line;

    if (sortedLines.indexOf(statusSeverity) < 0) {
      statusSeverity === 10 ? sortedLines.push(line) : sortedLines.unshift(line);
    }
  });

  return sortedLines;
}
