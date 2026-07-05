import React, { useState, useEffect } from 'react';



const Timer = () => {

  const [time, setTime] = useState(7200); // یک ساعت



  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prevTime) => {

        if (prevTime <= 0) {

          clearInterval(interval);

          return 0;

        }



        return prevTime - 1;

      });

    }, 1000);



    return () => clearInterval(interval);

  }, []);





  const hours = Math.floor(time / 3600);



  const minutes = Math.floor(

    (time % 3600) / 60

  );



  const seconds = time % 60;



  return (

    <div>

      <h1>

        {String(hours).padStart(2, '0')}:

        {String(minutes).padStart(2, '0')}:

        {String(seconds).padStart(2, '0')}

      </h1>

    </div>

  );

};



export default Timer;
