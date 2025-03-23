import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Markdown from 'marked-react';

import './index.css';
import img from './computer09_obaasan.png';

const markdown_text = '# Markdown Syntax Guide\n\n## HEADINGS\n\n# Heading Level 1\n## Heading Level 2\n### Heading Level 3\n#### Heading Level 4\n##### Heading Level 5\n###### Heading Level 6\n\n## BOLD AND ITALIC\n\nYou can **emphasize** text like this.\nOr you can __emphasize__ it like this.\n\nItalicized text uses just *one* asterisk or _one_ underscore.\n\n## LINKS\n\nHow about links you say?\n\nWrap the link text in brackets followed by a URL or a PATH in parentheses like this: \n\n[The Markdown Guide](https://www.markdownguide.org/)\n\n## Images\n\nImages are done in a similar way.\n![This is alt text.](https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg "Optional Title.")\n\n## BLOCK QUOTES\n\n> This is how you can create block quotes.\n>\n> You can do it for multiple paragraphs.\n>> You can also nest a block quote inside another.\n\n## ORDERED LISTS\n\n1. First Item\n2. Second Item\n3. Third Item\n    1. Indented Item\n    2. Indented Item\n4. Fourth Item\n\n## UNORDERED LISTS\n\nYou can create an unordered list using asterisks, dashes or plus signs.\n\n- First Item\n- Second Item\n- Third Item\n    - Indented Item\n    - Indented Item\n- Fourth Item\n\n## CODE BLOCKS\n\n\`\`\`let msg = \'Markdown is fun!;\n console.log(msg);\`\`\` \n\n## INLINE CODE\n\nIt\'s also very `useful`.\n\n';

const App = () => {
  /*Initial State*/
  let [markdown, setMarkdown] = React.useState(markdown_text);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return(
    <div id="app">
      <div id="left-side" className="window">
        <h1 id="editor-title">Editor</h1>
        <textarea id="editor" onChange={handleChange}>
          {markdown}
        </textarea>
      </div>
      <div id="right-side">
        <h1 id="preview-title">Previewer</h1>
        <div id="preview" className="window">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
