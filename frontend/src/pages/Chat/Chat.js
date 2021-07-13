import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function Chat() {
	return (
		<ChatEngine
			height='100vh'
			userName= {localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='07f18633-a1ef-4a59-80fd-914176516a2e'


            //renderChatFeed={(chatAppProps)=><Feed {...chatAppProps}
		///>
    //}
    />
    );
	
}