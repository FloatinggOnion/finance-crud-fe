
interface Transaction {
    id: number;
    amount: number;
    category: string;
    description: string;
    is_income: boolean;
    date: string;
}

interface Props {
    transactions: Transaction[];
    onDelete: (id: number) => void;
}


const Table = ({ transactions, onDelete }: Props) => {
  return (
    <table className='w-full p-3'>
        <thead className='bg-background border-b-2 border-accent'>
            <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Income</th>
            </tr>
        </thead>
        <tbody className=''>
            {transactions.map((transaction) => {
              return(
                <tr key={transaction.id}>
                  <td className='p-3 text-sm '>{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.is_income === true ? 'Yes' : 'No'}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <button 
                      className="border-b-2 border-accent" 
                      onClick={() => onDelete(transaction.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
              })
            }
        </tbody>
    </table>
  )
}

export default Table