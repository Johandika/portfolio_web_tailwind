import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({className,text}) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef.current mengacu pada elemen <span> yang akan berisi teks mengetik
    typed.current = new Typed(el.current, options);

    // Lakukan pembersihan saat komponen akan di-unmount
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} className={className}  />
    </div>
  );
};

export default TypedText;
