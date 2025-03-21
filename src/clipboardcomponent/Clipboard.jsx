import { useState } from 'react';
function Clipboard() {
  const [inputValue, setInput] = useState("");
  const [isCopied, setIsCopied] = useState(false); 

  const handleCopy = async () => {
    await navigator.clipboard.writeText(inputValue);
    setIsCopied(true); 
    setTimeout(() => setIsCopied(false), 2000); 
    setInput("")
  };

  return (
    <>
      <h1 className='text-center'>Clipboard</h1>
      <div className='text-center mt-[5rem]'>
        <input
          className="text-blue px-5 border-2 border-black rounded-md"
          type="text"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-sky-300 px-5 rounded-md"
          onClick={handleCopy} 
        >
          {isCopied ? "Copied!" : "Copy Message"} 
        </button>
      </div>
    </>
  );
}

export default Clipboard;