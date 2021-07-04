import React from 'react';
import { useEffect,useState } from 'react';
import firebase from './Config/firebase';

import NavBar from './Components/NavBar';
import Form from './Components/Form';
import FeedBack from './Components/FeedBack';

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
      const feedbackRef = firebase.database().ref(`feedbacks`);
      feedbackRef.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setData(data);
        }
      });
    }, []);

  return (
    <div className="container">
     <NavBar />
     <div className="row">
       <div className="col-6">
         <Form setData={setData}/>
         </div>
         <div className="col-6">
           <FeedBack data={data}/>
           </div>
           </div>
           </div>
    );
  }
export default App;
