let isHotOutside = true;
let isWeekday = false;
let hasMoneyInPocket = true;

let costOfMilk = 2;
let moneyInWallet = 3;
let thirstyLevel = 5;

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && isWeekday;
var isAGoodDay = hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOutside && thirstyLevel >= 2;

if (isHotOutside && hasMoneyInPocket) {
    console.log(shouldBuyIceCream);
} else {
    prompt("You do not have enough money!")
};

if (isHotOutside && isWeekday == false); {
    console.log(willGoSwimming);
}

if (hasMoneyInPocket && !isWeekday); {
    console.log(isAGoodDay);
}

if (isHotOutside && thirstyLevel >= 2) {
    console.log(willBuyMilk);
}