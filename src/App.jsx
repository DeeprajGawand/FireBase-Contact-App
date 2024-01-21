import Navbar from "./components/Navbar"
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./config/firebase"

import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

 
const App = () => {
 
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = ()=>{
    setOpen(false);
  };


  const[contacts, setContacts] = useState([]);

  useEffect(()=>{

    const getContacts = async ()=>{
      try {
        const contactsRef= collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return{
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    }

    getContacts();
  },[])

  return (
    <>
   <div className="mx-auto max-w-[370px] px-4">
    <Navbar/>
    <div className="flex gap-2">
    <div className="relative flex items-center flex-grow">
      <FiSearch className="absolute ml-1 text-3xl text-white"/>
      <input 
      type="text" 
      className=" h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9"
      placeholder="Search Contact"
      />
    </div>
      <AiFillPlusCircle
      onClick={onOpen}
      className="text-5xl cursor-pointer text-white" />
    </div>
    <div className="mt-4 flex flex-col gap-3">
      {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
      ))}
    </div>
   </div>
   <div>
    <Modal isOpen={isOpen} onClose={onClose}>
      Hi
    </Modal>
   </div>
   </>
  );
};

export default App