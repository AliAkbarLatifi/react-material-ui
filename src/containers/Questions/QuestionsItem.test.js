import React from 'react';

import ReactDOM from 'react-dom';

import QuestionsItem from './QuestionsItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const question= {published_at: new Date().toISOString(), url: 'question/1', choices: [], question: ''};

    ReactDOM.render(
        (
            <QuestionsItem item={question}/>
        ),
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});
