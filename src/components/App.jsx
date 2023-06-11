import './App.css';
import user from './user/user.json';
import friends from './friends/friends.json';
import data from './data/data.json';
import transactions from './transactions/transactions.json';
import { Profile } from './user/user.jsx';
import { FriendList } from './friends/friends.jsx';
import { Statistics } from './data/data.jsx';
import { TransactionHistory } from './transactions/transactions.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template 
      
    </div>
  );
};
