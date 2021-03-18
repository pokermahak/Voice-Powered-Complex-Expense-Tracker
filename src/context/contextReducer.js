//Reducer is a func that takes an old state and action and return a new state

const contextReducer=(state,action)=>
{
        let transactions;
        switch (action.type) {
            case 'DELETE_TRANSACTION':
                transactions = state.filter((t)=>t.id != action.payload);
                localStorage.setItem('transactions',JSON.stringify(transactions));
                return transactions;
                break;
            case 'ADD_TRANSACTION':
               transactions = [action.payload,...state];
               localStorage.setItem(
                 "transactions",
                 JSON.stringify(transactions)
               );
                return transactions;            
        
            default:
                return state;
        }
    
}
export default contextReducer;