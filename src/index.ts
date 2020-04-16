interface ErrorMessage {
  message: string;
  stack: Array<{
    line: number;
    column: number;
    filename: string;
  }>;
}

function getErrorMessage(): ErrorMessage {
  return {
    message: 'Error raised',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js'
      }
    ]
  };
}

export default getErrorMessage;
