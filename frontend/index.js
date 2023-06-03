import 'regenerator-runtime/runtime';
import { Wallet } from './near-wallet';

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })

// Setup on page load
window.onload = async () => {
  let isSignedIn = await wallet.startUp();

  if (isSignedIn) {
    signedInFlow();
  } else {
    signedOutFlow();
  }
  fetchFeatures();
  featchMyAccount();
};

// Button clicks
document.querySelector('form').onsubmit = doUserAction;
document.querySelector('#register-features').onsubmit = registerFeature;
document.querySelector('#buy-features').onsubmit = buyFeatures;
document.querySelector('#sign-in-button').onclick = () => { wallet.signIn(); };
document.querySelector('#sign-out-button').onclick = () => { wallet.signOut(); };
document.querySelector('#sign-in-buyer-button').onclick = () => { buyerPage(); };


async function registerFeature(event) {
  event.preventDefault();
  
  


  const { greeting } = event.target.elements;
  var a = 'r,'+greeting.value
  
  
  document.querySelector('#signed-in-flow main')
    .classList.add('please-wait');

  await wallet.callMethod({ method: 'add_experience', args: { greeting: a }, contractId: CONTRACT_ADDRESS });

  // ===== Fetch the data from the blockchain =====
  await fetchGreeting();
  document.querySelector('#signed-in-flow main')
    .classList.remove('please-wait');
}


// Take the new greeting and send it to the contract
async function doUserAction(event) {
  event.preventDefault();
  
  
}

async function buyFeatures(event) {
  event.preventDefault();
  
  

  const { greeting } = event.target.elements;
  var a = 'b,'+greeting.value
  

  document.querySelector('#buyFeatures')
  await wallet.callMethod({ method: 'buy_features', args: { greeting: a }, contractId: CONTRACT_ADDRESS });

  // ===== Fetch the data from the blockchain =====
  await fetchGreeting();
  document.querySelector('#signed-in-flow main')
}

async function featchMyAccount() {
  const features = await wallet.viewMethod({ method: 'get_experience', contractId: CONTRACT_ADDRESS });
    r = features.filter(x => x.split(',')[0] == 'r')

  
  


  
  for (let i = 0; i < features.length; i++) {
    var s = features[i].split(',')
  
    const newDiv = document.createElement('div');
    
    
    var text = ""
    if (s.length != 4) {
      text = ""
    }
    else if (s[0] != 'b') {
      text = ""
    }
    else {
      let r = features.filter(x => x.split(',')[0] == 'r')
      let r2 =  r.find(x => Number(x.split(',')[1]) == s[1])
      
      
      let dueDate = r2.split(',')[4]
      var a = 'code: ' + s[1]
      var b = ', count: ' + s[2]
      var c = ', price: ' + s[3]
      var d = ', due date: ' + dueDate
      text = a + b + c + d
    }

    // Set attributes, such as id and class
    newDiv.setAttribute('id', 'myDiv');
    newDiv.setAttribute('class', 'myClass');
    
    newDiv.innerHTML = text 

    const clone = newDiv.cloneNode(true);
    
    document.querySelector('#my-account').appendChild(clone);
  }
}
// Get experience
async function fetchFeatures() {
  var features = await wallet.viewMethod({ method: 'get_features', contractId: CONTRACT_ADDRESS });
  features = features.filter(x => x.split(',')[0] == 'b' || x.split(',')[0] == 'r')
  
  r = features.filter(x => x.split(',')[0] == 'r')
  let b = features.filter(x => x.split(',')[0] == 'b')
  
  
  for (let i = 0; i < r.length; i++) {
    var s = r[i].split(',')
    
    

    var currentCount = Number(s[2])
    
    if (Array.isArray(b)) {
      
      var LbuyCount = b.filter(x => x.split(',')[1] == Number(s[1]))
          .map(x => Number(x.split(',')[2]))
      
      var buyCount = 0
      for (let z = 0; z < LbuyCount.length; z++ ) {
        buyCount += LbuyCount[z];
      }
      currentCount -= buyCount;
    }
        
    

    var a = 'code: ' + s[1]
    var b2 = ', count: ' + currentCount.toString()
    var c = ', price: ' + s[3]
    var d = ', due date: ' + s[4]
    
    const newDiv = document.createElement('div');

    var text = ""
    if (s.length != 5) {
      text = ""
    }
    else {
      text = a + b2 + c + d
    }

    // Set attributes, such as id and class
    newDiv.setAttribute('id', 'myDiv');
    newDiv.setAttribute('class', 'myClass');
    
    newDiv.innerHTML = text 

    const clone = newDiv.cloneNode(true);
    
    document.querySelector('#registerd-features').appendChild(clone);
  }
}



// Display the signed-out-flow container
function signedOutFlow() {
  document.querySelector('#signed-in-flow').style.display = 'none';
  document.querySelector('#signed-out-flow').style.display = 'block';
}

// Displaying the signed in flow container and fill in account-specific data
function signedInFlow() {
  document.querySelector('#signed-out-flow').style.display = 'none';
  document.querySelector('#signed-in-flow').style.display = 'block';
  document.querySelectorAll('[data-behavior=account-id]').forEach(el => {
    el.innerText = wallet.accountId;
  });
}