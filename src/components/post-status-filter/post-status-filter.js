import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap'

const PostStatusFilter = () => {
    return(
        <div className="btn-group">
            <Button type="button" color="info">Все</Button>
            <Button type="button" className="btn btn-outline-secondary">Понравилось</Button>
        </div>
    )
}

export default PostStatusFilter;