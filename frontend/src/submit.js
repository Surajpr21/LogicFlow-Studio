import { useState } from 'react';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';
const postPipeline = async (payload) => {
    return fetch(`${API_BASE_URL}/pipelines/parse`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
};

export const submitPipeline = async (nodes, edges) => {
    console.log('Nodes:', nodes);
    console.log('Edges:', edges);

    const payload = {
        nodes: nodes.map((n) => ({ id: n.id })),
        edges: edges.map((e) => ({
            source: e.source,
            target: e.target
        }))
    };

    try {
        const response = await postPipeline(payload);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
};

export const SubmitButton = ({ nodes, edges }) => {
    const [analysis, setAnalysis] = useState(null);

    const handleSubmit = async () => {
        try {
            const result = await submitPipeline(nodes, edges);
            setAnalysis({
                numNodes: result.num_nodes,
                numEdges: result.num_edges,
                isDag: result.is_dag,
            });
        } catch (error) {
            alert(`Failed to analyze pipeline: ${error.message}`);
        }
    };

    const closeModal = () => setAnalysis(null);

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button className="submit-trigger button" type="button" onClick={handleSubmit}>Submit</button>
            </div>

            {analysis && (
                <div className="analysis-modal-overlay" onClick={closeModal}>
                    <div className="analysis-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="analysis-close" type="button" onClick={closeModal} aria-label="Close">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="analysis-head">
                            <div className="analysis-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3 className='analysis-title'>Pipeline analysis successful!</h3>
                                <p className="analysis-subtitle">Your graph was parsed successfully.</p>
                            </div>
                        </div>

                        <div className="analysis-details">
                            <div className="analysis-row">
                                <span>Nodes</span>
                                <strong>{analysis.numNodes}</strong>
                            </div>
                            <div className="analysis-row">
                                <span>Edges</span>
                                <strong>{analysis.numEdges}</strong>
                            </div>
                            <div className="analysis-row">
                                <span>Is DAG</span>
                                <strong>{String(analysis.isDag)}</strong>
                            </div>
                        </div>

                        <div className="analysis-actions">
                            <button className="analysis-secondary" type="button" onClick={closeModal}>Dismiss</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
