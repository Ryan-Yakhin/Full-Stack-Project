import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import RateLimitedUI from "../components/RateLimitedUI";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function HomePage() {
    
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try{
                const res = await axios.get("http://localhost:5001/api/notes");
                const data = res.data;
                console.log("Fetched notes:", data);
                setNotes(data);
                setIsRateLimited(false);
            }catch(err) {
                console.error("Error fetching notes:", err);
                if(err.response && err.response.status === 429) {
                    setIsRateLimited(true);
                }else{
                    toast.error("An error occurred while fetching notes.");
                }
            }finally{
                setLoading(false);
            }
        }

        fetchNotes();
    },[])

    return (
        <div
            className="min-h-screen"
        >
            <Navbar />
            {isRateLimited && <RateLimitedUI />}
        
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}
                
                {notes.length > 0 && !isRateLimited &&  (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                            <NoteCard key={note._id} note={note} />
                        ))}
                    </div>
                )}
            </div>
        
        </div>
    );
}