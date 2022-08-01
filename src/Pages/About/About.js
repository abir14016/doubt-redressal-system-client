import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import thinker from '../../../src/images/utilities/thinker.png';
import './About.css';

const About = () => {
    const [overviewOpen, setOverviewOpen] = useState(false);
    const [q1Open, setQ1Open] = useState(false);
    const [q2Open, setQ2Open] = useState(false);
    const [q3Open, setQ3Open] = useState(false);
    const [q4Open, setQ4Open] = useState(false);
    return (
        <div style={{ background: "linear-gradient(#c33764, #1d2671)" }}>
            <div className='container py-5'>
                <div>
                    <div>
                        <Button
                            onClick={() => setOverviewOpen(!overviewOpen)}
                            aria-controls="simple-overview"
                            aria-expanded={overviewOpen}
                        >
                            Simple Overview
                        </Button>
                    </div>
                    <div style={{ minHeight: '150px' }}>
                        <Collapse in={overviewOpen} dimension="width">
                            <div id="simple-overview">
                                <Card className='shadow-lg' body style={{ width: '370px' }}>
                                    <p className='fw-bold'>XetGo Solver is a 'doubt redressal system' application for teachers & students colaboration. Students can ask their doubts and the teachers can solve any unsolved doubt.</p>
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </div>

                <h2 className='text-white text-center'>FrequentLy ASked Questions(FAQs):</h2>

                <div className='faq-container'>
                    <div className='q-container'>
                        <div>
                            <div>
                                <span className='text-white'>1. what can a student do? </span>
                                <Button
                                    onClick={() => setQ1Open(!q1Open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={q1Open}
                                >
                                    Ans
                                </Button>
                                <Collapse in={q1Open}>
                                    <Card id="example-collapse-text" className='shadow-lg fw-bold p-2'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </Collapse>
                            </div>

                            <div className='mt-2'>
                                <span className='text-white'>2. what can a teacher do? </span>
                                <Button
                                    onClick={() => setQ2Open(!q2Open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={q2Open}
                                >
                                    Ans
                                </Button>
                                <Collapse in={q2Open}>
                                    <Card id="example-collapse-text" className='shadow-lg fw-bold p-2'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </Collapse>
                            </div>

                            <div className='mt-2'>
                                <span className='text-white'>3. what is the login method? </span>
                                <Button
                                    onClick={() => setQ3Open(!q3Open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={q3Open}
                                >
                                    Ans
                                </Button>
                                <Collapse in={q3Open}>
                                    <Card id="example-collapse-text" className='shadow-lg fw-bold p-2'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </Collapse>
                            </div>

                            <div className='mt-2'>
                                <span className='text-white'>4. Who can comment? </span>
                                <Button
                                    onClick={() => setQ4Open(!q4Open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={q4Open}
                                >
                                    Ans
                                </Button>
                                <Collapse in={q4Open}>
                                    <Card id="example-collapse-text" className='shadow-lg fw-bold p-2'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                    <div className='thinker-container'>
                        <img className='thinker' src={thinker} alt="thinker" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;