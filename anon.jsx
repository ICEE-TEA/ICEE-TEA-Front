import { useState } from "react";

const Chi = ({ isTrue, setIsTrue }) => {
  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  return <button onClick={handleClick}>클릭</button>;
};

const Par = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      {isTrue && "이건 된다"}
      <Chi isTrue={isTrue} setIsTrue={setIsTrue} />
    </div>
  );
};
