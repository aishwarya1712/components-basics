import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><Comment name="Sam" timestamp="Now" comment="Nice blog post!"/></ApprovalCard>
            <ApprovalCard><Comment name="Alex" timestamp="10:56 AM" comment="Good job."/></ApprovalCard>
            <ApprovalCard><Comment name="Max" timestamp="2 days ago" comment="Keep up the good work!"/></ApprovalCard>
            <ApprovalCard>Are you sure?</ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))