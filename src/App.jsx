import Navbar from "./components/Navbar"
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import {db} from "./config/firebase"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";
 
const App = () => {
 
  const {isOpen, onClose, onOpen} = useDisclouse();


  const[contacts, setContacts] = useState([]);

  useEffect(()=>{

    const getContacts = async ()=>{
      try {
        const contactsRef= collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return{
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
        
      } catch (error) {
        console.log(error);
      }
    }

    getContacts();
  },[]);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
   <div className="mx-auto max-w-[370px] px-4">
    <Navbar/>
    <div className="flex gap-2">
    <div className="relative flex items-center flex-grow">
      <FiSearch className="absolute ml-1 text-3xl text-white"/>
      <input 
      onChange={filterContacts}
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
      {contacts.length <= 0 ? (
        <NotFoundContact/>
      ): (contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
      ))
      )}
    </div>
   </div>
   <AddAndUpdateContact
   onClose={onClose} isOpen={isOpen} />
   <ToastContainer/>
   </>
  );
};

export default App