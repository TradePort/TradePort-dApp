import store from '../../store';
import { web3Initialized, web3Loading, web3Failed } from '../../actions/web3';

const loadWeb3 = (window, dispatch = store.dispatch.bind(store)) =>
    new Promise(async (resolve, reject) => {
        dispatch(web3Loading("Loading Web3"));
        if (window.ethereum) {
            // this is the new metamask way. details: https://bit.ly/2QQHXvF
            window.web3 = new window.Web3(window.ethereum)
            try {
                await window.ethereum.enable()
                    .then(web3 => {
                    //     console.log(web3);
                        resolve(dispatch(web3Initialized(web3)));
                    })
            } catch (e) {
                reject(dispatch(web3Failed(e)))
            }
        } else if (window.web3 && window.web3.version) {
            // this is the old way, accounts are always exposed.
            window.web3 = new window.Web3(window.web3.currentProvider);
            resolve(web3Initialized(window.web3));
        } else {
            reject(dispatch(web3Failed('Non ethereum browser detected. App requires Metamask or a dapp like mist')))
        }
        return
    })

export default loadWeb3;