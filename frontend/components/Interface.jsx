import {useState} from 'react';

const Interface = () => {

    const [account, updateAccount] = useState(null);
    const connectMetamask = async () => {
      try{
        if(!window.ethereum){
          alert("Install Metamask to use this application")
          throw new Error("Install Metamask to use this application");
        }

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = window.ethereum.networkVersion;
        const account = accounts[0];
        let balance = await window.ethereum.request({ method: 'eth_getBalance', params: [account, "latest"] });


      }catch(err){
        console.log(err);
      }
    };

  return (
    <>
    {!account ? (
      <div><h1>Account Connected</h1></div>
    ) : (
      <div onClick={connectMetamask} >Connect Metamask</div>
    )}
    </>
  )
}

export default Interface