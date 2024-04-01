import { useSelector } from 'react-redux';
import { selectComment } from './commentsSlice';
import './Comments.css';

export function Comments() {
    const comments = useSelector(selectComment);

    return (
        <></>
    )
}