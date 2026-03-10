import { BaseNode } from '../components/BaseNode';

export const MathNode = () => {
  return (
    <BaseNode title="Math" inputs={['a', 'b']} outputs={['result']}>
      <span>Performs a basic numeric transform.</span>
    </BaseNode>
  );
};
