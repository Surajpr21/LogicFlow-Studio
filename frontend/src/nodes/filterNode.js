import { BaseNode } from '../components/BaseNode';

export const FilterNode = () => {
  return (
    <BaseNode title="Filter" inputs={['input']} outputs={['passed', 'failed']}>
      <span>Routes values based on a condition.</span>
    </BaseNode>
  );
};
