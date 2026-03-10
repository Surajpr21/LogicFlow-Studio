import { Handle, Position } from 'reactflow';

const normalizeHandle = (handle) => {
  if (typeof handle === 'string') {
    return { id: handle, label: handle };
  }

  return { id: handle.id, label: handle.label || handle.id };
};

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div className="node-container">
      {inputs.map((input, index) => {
        const inputHandle = normalizeHandle(input);

        return (
          <Handle
            key={`in-${inputHandle.id}`}
            type="target"
            position={Position.Left}
            id={inputHandle.id}
            style={{ top: 40 + index * 20 }}
          />
        );
      })}

      {outputs.map((output, index) => {
        const outputHandle = normalizeHandle(output);

        return (
          <Handle
            key={`out-${outputHandle.id}`}
            type="source"
            position={Position.Right}
            id={outputHandle.id}
            style={{ top: 40 + index * 20 }}
          />
        );
      })}

      <div className="node-title">{title}</div>
      <div className="node-body">{children}</div>
    </div>
  );
};
