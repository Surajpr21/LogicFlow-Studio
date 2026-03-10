import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';
import './styles.css';

function App() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div className="app-shell">
      <div className="app-brand" aria-label="Application name">
        <span className="app-brand-mark" aria-hidden="true">LF</span>
        <div className="app-brand-copy">
          <p className="app-brand-kicker">Workspace</p>
          <h1>LogicFlow Studio</h1>
        </div>
      </div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
