import { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = ({ text = 'Subscribe' }) => {
    const [email, setEmail] = useState('');
    const [sendingMail, setSendingMail] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setSendingMail(true);

        try {
            const response = await fetch('/.netlify/functions/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                document.getElementById("contact-form").reset();
                setEmail('');
                toast.success("Successfully subscribed!");
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setSendingMail(false);
        }
    };

    return (<div className="subscription-container">
        <form id="contact-form" onSubmit={handleSubscribe}>
            <input
                type="email"
                placeholder="e.g., name@example.com"
                className="subscription-input"
                style={{ color: 'black' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className="subscription-btn" disabled={sendingMail} style={{color: '#fff'}}>
                {text}
            </button>
        </form>
    </div>)
}

export default Subscribe;