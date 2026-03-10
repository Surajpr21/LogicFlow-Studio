import { BaseNode } from '../components/BaseNode';

export const DelayNode = () => {
  return (
    <BaseNode title="Delay" inputs={['input']} outputs={['output']}>
      <span>Simulates delayed processing.</span>
    </BaseNode>
  );
};
