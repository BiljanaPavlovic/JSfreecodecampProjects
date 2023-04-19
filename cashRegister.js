function checkCashRegister(price, cash, cid) {
    const currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;
    let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);
    let change = [];

    if (changeDue > totalCashInDrawer) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue.toFixed(2) === totalCashInDrawer.toFixed(2)) {
        return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();
        for (let i = 0; i < cid.length; i++) {
            let currencyName = cid[i][0];
            let currencyValue = currencyValues[currencyName];
            let currencyAmount = cid[i][1];
            let currencyAvailable = currencyAmount / currencyValue;
            let currencyToReturn = 0;
            while (changeDue >= currencyValue && currencyAvailable > 0) {
                changeDue -= currencyValue;
                changeDue = Math.round(changeDue * 100) / 100;
                currencyAvailable--;
                currencyToReturn++;
            }
            if (currencyToReturn > 0) {
                change.push([currencyName, currencyToReturn * currencyValue]);
            }
        }
        if (changeDue > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else {
            return { status: "OPEN", change: change };
        }
    }
}

console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)