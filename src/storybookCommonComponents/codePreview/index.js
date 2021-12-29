import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  AccordionItem
} from './style';

const CodePreview = (props) => {
  const {
    language = 'javascript',
    codeString = '',
  } = props;
  const [showCode, setShowCode] = useState(null);

  return (
    <Accordion
      defaultActiveKey={showCode}
      onClick={() => setShowCode((showCode !== null) ? null : 0)}
    >
      <AccordionItem eventKey="0">
        <Accordion.Header>
          [{(showCode === null)
            ? 'Afficher code'
            : 'Cacher code'
          }]
        </Accordion.Header>
        <Accordion.Body>
          <SyntaxHighlighter
            language={language}
            style={dracula}
          >
            {codeString}
          </SyntaxHighlighter>
        </Accordion.Body>
      </AccordionItem>
    </Accordion>
  );
};

export default CodePreview;
