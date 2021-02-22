import React from "react";
import Summary from "./Summary";
import UpdateTransaction from "./UpdateTransaction";
// ===IMPORT REACT FONTAWESOME======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Transaction = (props) => {
  const { user, url, getUser } = props;
  const [toggleUpdate, setToggleUpdate] = React.useState(false);
  // =====DESTROY ROUTE=============
  const destroyTransaction = (id) => {
    fetch(url + "/transactions/" + id, {
      method: "delete",
    }).then(() => {
      getUser();
    });
  };
  // ======================================
  // ============PUT ROUTE=================
  const handleToggleUpdate = () => {
    setToggleUpdate((toggle) => !toggle);
  };

  const [selectedTrans, setSelectedTrans] = React.useState(null);
  const handleSetSelectedTrans = (expense) => {
    setSelectedTrans(expense);
  };
  const handleUpdate = (expense) => {
    fetch(url + "/transactions/" + selectedTrans._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    }).then(() => {
      getUser();
    });
  };
  // =====================================

  //States for toggling the sort for routine and non-routine transaction by date.
  const [toggleSort, setToggleSort] = React.useState(false);
  const [toggleSortNon, setToggleSortNon] = React.useState(false);

  const loaded = () => {
    /* ------------------------------------------------------
     CALCULATE THE TOTAL SPENDINGS
    ------------------------------------------------------ */
    let totalSpent = 0;
    const budget = user.budget; //for use as props also
    const transactions = user.transactions; // for use as props also

    //- Grab only the transactions that are isExpense: true
    const totalExpenses = user.transactions.filter((transaction) => {
      return transaction.isExpense === true;
    });

    // Add up each expense transaction to the totalSpent
    totalExpenses.forEach((transaction) => {
      return (totalSpent = totalSpent + transaction.amount);
    });

    /* ------------------------------------------------------
  - CALCULATE DEPOSITES AND ADD TO INCOME
  ------------------------------------------------------ */
    //Grab all transaction objects that has isExpense false
    const totalDeposite = transactions.filter((transaction) => {
      return transaction.isExpense === false;
    });

    // Add up each deposite transaction to the depositeSum
    let depositeSum = 0;
    totalDeposite.forEach((deposite) => {
      return (depositeSum += deposite.amount);
    });
    // console.log("Total deposites: ", totalDeposite);
    // console.log("Total deposite amount: ", depositeSum);

    /* ------------------------------------------------------
     GET TRANSACTIONS - NON-BILLS - POSITIVE AND NEGATIVE TRANSACTIONS
    ------------------------------------------------------ */

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const nonRoutineExpense = user.transactions.filter((transaction) => {
      return transaction.isRoutine === false;
    });

    //Create an array that holds the sorted transactions Latest - Oldest
    const sortedNonRouArr = nonRoutineExpense
      .slice()
      .sort((a, b) => new Date(b.time) - new Date(a.time));

    let togBtnNonroutine = "Oldest";

    const sort_non_routine = () => {
      setToggleSortNon(!toggleSortNon);
    };

    let expenseList = [];

    //If toggleSortNon = true, map the sorted array, else map the original array.
    if (toggleSortNon) {
      togBtnNonroutine = "Latest";
      expenseList = sortedNonRouArr.map((expense, index) => {
        //Need to use New Date() to get the transaction date into a proper format.
        // When it was created from date.now() it is actaully an integer of how many milliseconds...
        let formatedDate = new Date(expense.time);

        // Set the color for the transaction $$.
        // If expense, make it pink. If deposite, make it green
        let spanColor = "white";

        if (expense.isExpense === true) {
          spanColor = "#ffb0b0";
        } else {
          spanColor = "#5dca00";
        }

        return (
          <div className="transact-card" key={index}>
            <div>
              <p className="transact-descr">{expense.description}</p>
              <p className="trnact-light-font">{expense.category}</p>

              <p className="trnact-light-font">
                {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
                {formatedDate.getFullYear()} -{" "}
                {formatedDate.toLocaleTimeString()}
              </p>
            </div>

            <span style={{ color: spanColor }}>${expense.amount}</span>
            <div
              className="destroy-button"
              onClick={() => {
                destroyTransaction(expense._id);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faTrashAlt}
              />
            </div>
            <div
              onClick={() => {
                handleToggleUpdate();
                handleSetSelectedTrans(expense);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faEdit}
              />
            </div>
          </div>
        );
      });
    } else {
      expenseList = nonRoutineExpense.map((expense, index) => {
        //Need to use New Date() to get the transaction date into a proper format.
        // When it was created from date.now() it is actaully an integer of how many milliseconds...
        let formatedDate = new Date(expense.time);

        // Set the color for the transaction $$.
        // If expense, make it pink. If deposite, make it green
        let spanColor = "white";

        if (expense.isExpense === true) {
          spanColor = "#ffb0b0";
        } else {
          spanColor = "#5dca00";
        }

        return (
          <div className="transact-card" key={index}>
            <div>
              <p className="transact-descr">{expense.description}</p>
              <p className="trnact-light-font">{expense.category}</p>

              <p className="trnact-light-font">
                {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
                {formatedDate.getFullYear()} -{" "}
                {formatedDate.toLocaleTimeString()}
              </p>
            </div>

            <span style={{ color: spanColor }}>${expense.amount}</span>
            <div
              className="destroy-button"
              onClick={() => {
                destroyTransaction(expense._id);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faTrashAlt}
              />
            </div>
            <div
              onClick={() => {
                handleToggleUpdate();
                handleSetSelectedTrans(expense);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faEdit}
              />
            </div>
          </div>
        );
      });
    }

    // console.log("User info in transactions: ", user.transactions);
    // console.log("All non-routine expenses: ", nonRoutineExpense);

    /* ------------------------------------------------------
    GET TRANSACTIONS - BILLS 
  ------------------------------------------------------ */
    const routineExpense = user.transactions.filter((transaction) => {
      return transaction.isRoutine === true;
    });

    const sortedRoutine = routineExpense
      .slice()
      .sort((a, b) => new Date(b.time) - new Date(a.time));

    const sort_routine = () => {
      setToggleSort(!toggleSort);
    };

    let togBtnRoutine = "Oldest";
    let routineList = [];

    if (toggleSort) {
      togBtnRoutine = "Latest";
      routineList = sortedRoutine.map((expense, index) => {
        let formatedDate = new Date(expense.time);
        let spanColor = "white";

        if (expense.isExpense === true) {
          spanColor = "#ffb0b0";
        } else {
          spanColor = "#5dca00";
        }
        return (
          <div className="transact-card" key={index}>
            <div>
              <p className="transact-descr">{expense.description}</p>
              <p className="trnact-light-font">{expense.category}</p>
              <p className="trnact-light-font">
                {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
                {formatedDate.getFullYear()} -{" "}
                {formatedDate.toLocaleTimeString()}
              </p>
            </div>

            <span style={{ color: spanColor }}>${expense.amount}</span>
            <div
              className="destroy-button"
              onClick={() => {
                destroyTransaction(expense._id);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faTrashAlt}
              />
            </div>
            <div
              onClick={() => {
                handleToggleUpdate();
                handleSetSelectedTrans(expense);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faEdit}
              />
            </div>
          </div>
        );
      });
    } else {
      routineList = routineExpense.map((expense, index) => {
        let formatedDate = new Date(expense.time);
        let spanColor = "white";

        if (expense.isExpense === true) {
          spanColor = "#ffb0b0";
        } else {
          spanColor = "#5dca00";
        }
        return (
          <div className="transact-card" key={index}>
            <div>
              <p className="transact-descr">{expense.description}</p>
              <p className="trnact-light-font">{expense.category}</p>
              <p className="trnact-light-font">
                {months[formatedDate.getMonth()]} / {formatedDate.getDate()} /
                {formatedDate.getFullYear()} -{" "}
                {formatedDate.toLocaleTimeString()}
              </p>
            </div>

            <span style={{ color: spanColor }}>${expense.amount}</span>
            <div
              className="destroy-button"
              onClick={() => {
                destroyTransaction(expense._id);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faTrashAlt}
              />
            </div>
            <div
              onClick={() => {
                handleToggleUpdate();
                handleSetSelectedTrans(expense);
              }}
            >
              <FontAwesomeIcon
                className="navbar-home-icon"
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faEdit}
              />
            </div>
          </div>
        );
      });
    }

    return (
      <div className="transaction-component">
        <Summary
          transactions={transactions}
          budget={budget}
          totalSpent={totalSpent}
          depositeSum={depositeSum}
        />
        <div className="transact-headline">
          <h2> Your Transactions </h2>
        </div>

        <div className="all-transactions">
          <section>
            <h2>Non Routine</h2>
            <button onClick={sort_non_routine}>{togBtnNonroutine}</button>
            {expenseList}
          </section>

          <section>
            <h2>Routine Bills</h2>
            <button onClick={sort_routine}>{togBtnRoutine}</button>
            {routineList}
          </section>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Page loading...</h1>;
  };

  return (
    <>
      {user ? loaded() : loading()}
      <div className="add-transaction-container">
        {toggleUpdate ? (
          <UpdateTransaction
            transaction={selectedTrans}
            handleSubmit={handleUpdate}
            toggleAdd={handleToggleUpdate}
            setToggleUpdate={setToggleUpdate}
          />
        ) : null}
      </div>
    </>
  );
};
export default Transaction;
