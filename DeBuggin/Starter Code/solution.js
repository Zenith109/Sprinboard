// Array of account objects
const accounts = [
    {id: 1, owner: "Alice", balance: 500},
    {id: 2, owner: "Bob", balance: 300}
];

// Function to get an account by its ID
function getAccountById(id) {
    for (const account of accounts) {
        if (account.id == id) {
            return account;
        }
    }
}

// Function to create a new account
function createAccount(newAccountId, newAccountOwner) {
    accounts.push({
        id: newAccountId,
        owner: newAccountOwner,
        balance: 0 // Initialize balance to 0
    });
}

// Function to deposit money into an account
function depositMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found");
    }
    //this part was found by looking at bank functions on a actual active bank account
    account.balance += amount; // Add the deposit amount to the account balance
}

// Function to withdraw money from an account
function withdrawMoney(accountId, amount) {
    const account = getAccountById(accountId);

    if (!account) {
        throw new Error("Account not found.");
    }

    if (!Number.isFinite(amount)) {
        throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
    }

    account.balance -= amount; // Subtract the withdrawal amount from the account balance
}

// Function to transfer money from one account to another
function transferMoney(fromAccountId, toAccountId, amount) {
    const fromAccount = getAccountById(fromAccountId);
    const toAccount = getAccountById(toAccountId);

    if (!fromAccount) {
        throw new Error("Source account not found.");
    }

    if (!Number.isFinite(amount) || amount < 0) {
        throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
    }

    toAccount.balance += amount; // Add the transfer amount to the destination account balance
}