//functions calling function

function bmi_calc(user_weight, user_height) {
    console.log('checking2');
    const user_bmi = bmi_output(user_weight, user_height)
    if (user_bmi <= 18.0) {
        return " your bmi is " + user_bmi + " you are in under weight"
    } else if (user_bmi <= 25.0) {
        return " your bmi is " + user_bmi + " you are in healthy weight "
    } else if (user_bmi <= 35.0) {
        return "your bmi is " + user_bmi + " you are in over weight "
    } else if (user_bmi >= 35.0) {
        return " your bmi is " + user_bmi + " you are in obesity weight "
    }

}
console.log(bmi_calc(60, 1.76));
function bmi_output(weight, height) {
    console.log('checking3');
    return weight / height ** 2
}