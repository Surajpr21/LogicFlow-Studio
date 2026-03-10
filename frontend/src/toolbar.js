import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='apiNode' label='API' />
            <DraggableNode type='mathNode' label='Math' />
            <DraggableNode type='filterNode' label='Filter' />
            <DraggableNode type='mergeNode' label='Merge' />
            <DraggableNode type='delayNode' label='Delay' />
        </div>
    );
};
