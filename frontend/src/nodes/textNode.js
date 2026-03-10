import { useEffect, useMemo, useRef, useState } from 'react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  const variableInputs = useMemo(() => {
    const matches = currText.matchAll(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g);
    const uniqueVariables = [...new Set(Array.from(matches, (match) => match[1]))];
    return uniqueVariables;
  }, [currText]);

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [currText]);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    updateNodeField(id, 'text', value);
  };

  return (
    <BaseNode title="Text" inputs={variableInputs} outputs={[`${id}-output`]}>
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={currText} 
            onChange={handleTextChange}
            rows={1}
            style={{ width: '100%', resize: 'none', overflow: 'hidden', boxSizing: 'border-box' }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
