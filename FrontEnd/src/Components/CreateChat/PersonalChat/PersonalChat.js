import React, { useRef, useState, useEffect } from "react";
import "./PersonalChat.css";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function PersonalChat() {
  const userID = useStoreState((state) => state.userInfo)._id;
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef("");
  const otherUsers = useStoreState((state) => state.otherUsers);
  const getOtherUsers = useStoreActions((actions) => actions.getOtherUsers);
  const [searchResults, setSearchResults] = useState(otherUsers);

  useEffect(() => {
    getOtherUsers(userID);
  }, [userID]);

  const searchHandler = () => {
    let searchTerm = searchRef.current.value;
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = otherUsers.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(otherUsers);
    }
  };
  return (
    <div className='add-personal-chats-container'>
      <input
        placeholder='Search User'
        className='user-search-field'
        ref={searchRef}
        onChange={() => {
          searchHandler();
          //   searchHandler(searchTerm);
        }}
      />
      {searchResults !== []
        ? searchResults.map((u) => {
            return (
              <div className='add-chat-contact'>
                <img
                  src={u.displayPicture}
                  alt='add-cnt-img'
                  className='add-contact-img'
                />
                <div className='add-contact-details'>
                  <h4>{u.name}</h4>
                  <p>{u.email}</p>
                </div>
                <button
                  onClick={() => {
                    console.log(u._id);
                  }}
                  className='add-chat-button personal'
                >
                  +
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
}
