import { BaseNode } from '../components/BaseNode';

export const MergeNode = () => {
  return (
    <BaseNode title="Merge" inputs={['left', 'right']} outputs={['merged']}>
      <span>Merges two streams into one output.</span>
    </BaseNode>
  );
};
