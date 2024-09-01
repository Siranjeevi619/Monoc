import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import UserData from "../lib/data"; 

function Admin() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredUsers = UserData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Navbar />

      {/* Search Component */}
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 col-12 my-4">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-3"></div>
        </div>
      </div>

      {/* Display Filtered Users */}
      <div className="container">
        <div className="row">
          <div className="col-12 px-2">
            {filteredUsers.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
