import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Message({ adminAuth }) {
  const { id } = useParams();
  const [message, setMessage] = useState();
  const [adminReply, setAdminReply] = useState("");
  const [messageData, setMessageData] = useState();
  const [allMessageData, setAllMessageData] = useState();

  const windowName = "http://localhost:5000/";

  const handleMessageUpload = async (e) => {
    e.preventDefault();
    console.log(id);
    try {
      const response = await axios.post(`${windowName}messages/uploadMessage`, {
        message: message,
        adminAuth: adminAuth,
        adminReply: adminReply,
        userId: id,
      });
      setMessageData(response.data.messageData);
    } catch (error) {
      console.log("Error Sending message", error);
    }
  };
  useEffect(
    () => {
      if (adminAuth) {
        // Function to fetch all messages when the component mounts
        const fetchMessages = async () => {
          try {
            const response = await axios.get(
              `${windowName}messages/getAllMessages`
            );
            setAllMessageData(response.data.messages);
          } catch (error) {
            console.error("Error fetching messages", error);
          }
        };
        fetchMessages(); // Call the function
      } else {
        const fetchData = async () => {
          try {
            if (id) {
              const response = await axios.get(`${windowName}messages/UserMessages?userId=${id}`);
              setAllMessageData(response.data);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }
      console.log(allMessageData);
    },
    [id],
    [adminAuth]
  );

  return (
    <div>
      <Navbar />
      <div className="messageContainer">
        <div className="messageWrap">
          <span className="message">Hello,how are you doing ?</span>

          <span className=" messageAdmin">Am good, you ?</span>

          <span className="message">Hello,how are you doing ?</span>

          <span className=" messageAdmin">Am good, you ?</span>

          <span className="message">Hello,how are you doing ?</span>

          <span className=" messageAdmin">Am good, you ?</span>

          <span className="message">Hello,how are you doing ?</span>

          <span className=" messageAdmin">Am good, you ?</span>
        </div>
        <form className="messageInput">
          {adminAuth ? (
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setAdminReply(e.target.value)}
            ></input>
          ) : (
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          )}
          <button onClick={handleMessageUpload}>send</button>
        </form>
      </div>
    </div>
  );
}
