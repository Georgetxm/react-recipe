import React, {useState} from 'react';


const FormHolder = () => {

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const postData = async (userId, title, body) => {
        try {
            let result = await fetch('http://webhook.site/acb9fe51-dfe4-476d-be8c-4a326cca64a1', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    key1: userId,
                    key2: title,
                    key3: body
                })
            });
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                postData(userId, title, body).then(r =>
                    console.log(r));
            }}>
                <div>
                    <input type="text"
                           name="userId"
                           value={userId}
                           onChange={e => setUserId(e.target.value)}
                    />
                </div>
                <div>
                    <input type="text"
                           name="title"
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input type="text"
                           name="body"
                           value={body}
                           onChange={e => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default FormHolder