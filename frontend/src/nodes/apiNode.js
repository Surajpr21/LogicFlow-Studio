import { BaseNode } from '../components/BaseNode';

export const APINode = () => {
  return (
    <BaseNode title="API" inputs={['query']} outputs={['response']}>
      <span>Calls an external API endpoint.</span>
    </BaseNode>
  );
};
