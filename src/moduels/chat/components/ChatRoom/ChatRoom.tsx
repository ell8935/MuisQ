import { Link, useParams } from 'react-router-dom';
import NotFound from '../../../auth/components/NotFound404/NotFound404';
import { chatRooms } from '../../data/chatRooms';
import { MessageInput } from '../MessageInput/MessageInput';
import { MessageList } from '../MessageList/MessageList';
import './styles.css';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        return (<NotFound/>)
    }

    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
            <div className="messages-container">
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
        </>
    );
}

export { ChatRoom };