const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const { email } = JSON.parse(event.body);

        const apiKey = process.env.CONSTANT_CONTACT_API_KEY;
        const accessToken = process.env.CONSTANT_CONTACT_ACCESS_TOKEN;
        const listId = process.env.CONSTANT_CONTACT_LIST_ID;

        const response = await fetch('https://api.cc.email/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'API-Key': apiKey
            },
            body: JSON.stringify({
                email_address: {
                    address: email,
                    permission_to_send: "explicit"
                },
                list_memberships: [listId]
            })
        });

        if (!response.ok) {
            throw new Error('Failed to add contact');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully subscribed' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error subscribing user', error: error.message })
        };
    }
}
