interface ErrorMessage {
  message: string;
  stack: StackItem[];
}

interface StackItem {
  line: number;
  column: number;
  filename: string;
}

function getErrorMessage(fixtureStack: string): ErrorMessage {
  const errors = fixtureStack
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  let message = '';
  let stack: StackItem[] = [];
  const firstError = errors[0];
  if (firstError.includes('Error')) {
    message = firstError.split(':')[1].trim();
    errors.shift();
  }

  errors.forEach((error) => {
    const re = /(http.*):(\d+):(\d+)$/;
    const match = error.match(re);
    if (match) {
      stack.push({ line: Number(match[2]), column: Number(match[3]), filename: match[1] });
    }
  });

  return {
    message,
    stack
  };
}

export default getErrorMessage;
