/*




 









৫. এই সাইট নেটলিফাই তে ডেপ্লয় দিবে। 

চ্যালেঞ্জিং:







 */

function getById(element) {
    return document.getElementById(element);
}

function getInputValueAsNumber(feildName) {
    const element = getById(feildName);
    const valueInString = element.value;
    if (valueInString === "") {
        alert("you can not keep empty any feild");
        element.style.background = "#f87171";
        return;
    }

    const numberValue = parseFloat(valueInString);
    if (numberValue < 0) {
        element.style.background = "#f87171";
        alert("You cant not give any nagtive number on any input feild! sorry");
        return;
    }

    return numberValue;
}

const calculateBtn = getById("calculateBtn");
let balaneAfterExpenses;
calculateBtn.addEventListener("click", function() {
    const income = getInputValueAsNumber("income");
    const food = getInputValueAsNumber("food");
    const rent = getInputValueAsNumber("rent");
    const clothes = getInputValueAsNumber("clothes");

    const expenses = getById("expenses");
    const balance = getById("balance");
    const totalExpanses = food + rent + clothes;
    console.log(totalExpanses);
    if (isNaN(totalExpanses)) {
        return;
    }

    if (totalExpanses > income) {
        alert("expenses can not be grether than income");
        return;
    }

    const remaingBalance = income - totalExpanses;
    expenses.innerText = totalExpanses;
    balance.innerText = remaingBalance;
    getById("calculateSavingAmount").removeAttribute("disabled");
    getById("calculateSavingAmount").style.opacity = "1";
    balaneAfterExpenses = remaingBalance;
});

// saving part

const calculateSavingAmount = getById("calculateSavingAmount").addEventListener(
    "click",
    function() {
        const remainBalance = balaneAfterExpenses;
        const percentageOfSaving = getInputValueAsNumber("savePercentage");
        if (percentageOfSaving >= 100) {
            alert(
                "do you really want to save 100% or more of your earning? it's not posible here"
            );
            return;
        }

        //return (30 / 100) * mainAmount;
        const savedAmount = ((percentageOfSaving / 100) * remainBalance).toFixed(2);

        const balanceAfterSaving = remainBalance - savedAmount;

        getById("saved").innerText = savedAmount;
        getById("remain").innerText = balanceAfterSaving;
    }
);